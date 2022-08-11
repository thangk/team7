// import { format } from 'date-fns'
import { motion } from 'framer-motion';
import { FiDelete } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import api from '../api/base'
import { Watch, WatchQty } from '../interfaces';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { setNumOfCartItems } from '../features/cartSlice';
import { decrementCartItem, incrementCartItem, removeFromCart, resetCart } from '../features/guestSlice';
import { setRefUrl } from '../features/refSlice';

const cf = require('currency-formatter')



const Cart = () => {

    const dispatch = useDispatch()


    let cartTotals = {
        hstTotal: 0,
        subTotal: 0,
        grandTotal: 0
    }


    const [productsToDisplayInCart, setProductsToDispalyInCart] = useState<Watch[]>([])

    const [productsInCart, setProductsInCart] = useState<WatchQty[]>([])

    

    // @ts-ignore
    const guestCart = useSelector(state => state.guest.cart)

    // @ts-ignore
    const whoIsLoggedInUser = useSelector(state => state.loggedInUser.current)

    const loggedInUser = !whoIsLoggedInUser ? null : whoIsLoggedInUser.role === 'Customer' ? whoIsLoggedInUser : null

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)
    
    const [rerender, setRerender] = useState(false)

    const [firstRender, setFirstRender] = useState(true)
    

    const navigate = useNavigate()


    // @ts-ignore
    const handlePlaceOrder = async (e) => {
        e.preventDefault()

        // delete everything in cart when clicking place order as a guest
        if (!loggedInUser) {
            if (!guestCart.length) {
                alert('Cart is empty. Nothing to order.')
                return
            }
            // @ts-ignore
            dispatch(resetCart())
            dispatch(setNumOfCartItems(0))
            setRerender(true)
            fetchCartItems()
            dispatch(setRefUrl('/cart'))
            navigate('/cart/order-placed')
            return
        }

        if (!productsInCart.length) {
            alert('Cart is empty. Nothing to order.')
                return
        }

        try {
        
            await api.patch(`/carts/purchase/${loggedInUser.cartId}`)
        
        } catch (error) {
        
            const err = error as AxiosError
        
            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

        // fetchCartItems()
        dispatch(setRefUrl('/cart'))
        navigate('/cart/order-placed')

        
    }

    // @ts-ignore
    const handleDeleteItem = async (watchId: number, e) => {
        e.preventDefault()

        // console.log('handleDel Clicked')

        if (!loggedInUser) {
            dispatch(removeFromCart(watchId))
            setRerender(true)
            fetchCartItems()
            return
        }

        try {
        
            await api.delete(`/cart-watches`, {
                data: {
                    cartId: loggedInUser.cartId,
                    watchId,
                    deleteAll: true
                }
            })
        
        } catch (error) {
        
            const err = error as AxiosError
        
            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

        fetchCartItems()
    }

    // @ts-ignore
    const handleDecrementItem = async (watchId: number, currentItem, e) => {
        e.preventDefault()

        // console.log('handleDec Clicked')

        if (currentItem.qty === 1) return

        if (!loggedInUser) {
            dispatch(decrementCartItem(watchId))
            setRerender(true)
            fetchCartItems()
            return
        }

        try {
        
            await api.delete(`/cart-watches`, {
                data: {
                    cartId: loggedInUser.cartId,
                    watchId
                }
            })
        
        } catch (error) {
        
            const err = error as AxiosError
        
            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

        fetchCartItems()
    }

    // @ts-ignore
    const handleIncrementItem = async (watchId, currentItem, e) => {
        e.preventDefault()

        // console.log('handleInc Clicked')


        // max quantity per item
        if (currentItem.qty > 100) return

        if (!loggedInUser) {
            dispatch(incrementCartItem(watchId))
            setRerender(true)
            fetchCartItems()
            return
        }

        try {
        
            await api.post(`/cart-watches`, {
                cartId: loggedInUser.cartId,
                watchId
            })
        
        } catch (error) {
        
            const err = error as AxiosError
        
            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

        fetchCartItems()
    }

    
    const displayList = () => {

        // console.log(productsInCart.length)

        const displayList = []

        const hstRate = 0.13;

        let tempHstTotal = 0;

        let tempSubTotal = 0;

        let tempGrandTotal = 0;


        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].watchId === productsToDisplayInCart[i].id) {

                tempSubTotal += productsToDisplayInCart[i].price * productsInCart[i].qty


                displayList.push(
                    <div className={`cartpage__contentwrapper_item theme-text-${currentTheme}-3 theme-bg-${currentTheme}`} key={nanoid()}>
                        <div className="cartpage__contentwrapper_col1">{productsToDisplayInCart[i].name}</div>
                        <div className="cartpage__contentwrapper_col2">
                            <div className='cartpage__contentwrapper_qtybuttons' onClick={(e) => handleDecrementItem(productsToDisplayInCart[i].id, productsInCart[i], e)}>
                                <AiOutlineMinusCircle />
                            </div>
                            <motion.div key={productsInCart[i].watchId}
                                // initial={{
                                //     y: -5
                                // }}
                                // animate={{
                                //     y: 0
                                // }}
                            >
                            {productsInCart[i].qty}
                            </motion.div>
                            <div className='cartpage__contentwrapper_qtybuttons' onClick={(e) => handleIncrementItem(productsToDisplayInCart[i].id, productsInCart[i], e)}>
                                <AiOutlinePlusCircle />
                            </div>
                        </div>
                        
                        <div className="cartpage__contentwrapper_col3">{cf.format(productsInCart[i].qty * productsToDisplayInCart[i].price, {code: 'USD'})}</div>
                        <div className="cartpage__contentwrapper_col4">
                            <FiDelete className={`cartpage__deletebutton hover-theme-text-${currentTheme}-1`} onClick={(e) => handleDeleteItem(productsToDisplayInCart[i].id, e)} />
                        </div>
                    </div>
                )
            }
        }

        tempHstTotal = tempSubTotal * hstRate

        tempGrandTotal = tempSubTotal + tempHstTotal

        cartTotals = {
            hstTotal: tempHstTotal,
            subTotal: tempSubTotal,
            grandTotal: tempGrandTotal
        }

        return displayList
    }


    const fetchCartItems = async () => {

        let totalNumOfItems = 0;

        if (!loggedInUser) {

            // console.log(guestCart)

            if (guestCart.length) {
                for (const item of guestCart) {
                    totalNumOfItems += item.qty
                }
            }

            
            // set items count in redux
            dispatch(setNumOfCartItems(totalNumOfItems))

            const tempArray2: Watch[] = []

            for (const item of guestCart) {

                const { data } = await api.get(`/watches/${item.watchId}`)

                tempArray2.push(data)
            }
        
            setProductsToDispalyInCart(tempArray2)
            setProductsInCart(guestCart)
            
            return
        }

        

        try {

            let tempArray: WatchQty[] = []
        
            const { data } = await api.get(`/cart-watches/${loggedInUser.cartId}`)

            for (const item of data) {

                if (!tempArray.length) {

                    if (item.isInCart)

                    tempArray.push({
                        watchId: item.watchId,
                        qty: 1
                    })
                    
                } else {

                    let matchFound = false;

                    for (let i = 0; i < tempArray.length; i++) {


                        if (tempArray[i].watchId === item.watchId) {
                            tempArray[i].qty++
                            matchFound = true
                        }
                    }

                    if (!matchFound) {

                        if (item.isInCart)

                        tempArray.push({
                            watchId: item.watchId,
                            qty: 1
                        })
                    }
                }

                if (item.isInCart)

                totalNumOfItems++
            }

            // set items count in redux
            dispatch(setNumOfCartItems(totalNumOfItems))

            const tempArray2: Watch[] = []

            for (const item of tempArray) {

                const { data } = await api.get(`/watches/${item.watchId}`)

                tempArray2.push(data)
            }
        
            setProductsToDispalyInCart(tempArray2)

            setProductsInCart(tempArray)
        
        } catch (error) {
        
            const err = error as AxiosError
        
            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

    }

        
        
    useEffect(() => {

        if (firstRender) {
            fetchCartItems()
            setFirstRender(false)
        }

        if (rerender) {
            fetchCartItems()
            setRerender(false)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsInCart, productsToDisplayInCart])

    return (
        <motion.main 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className={`cartpage-wrapper`}>

            <h1 className={`page-title theme-text-${currentTheme}-3`}>Cart</h1>

            <section className={`cartpage-content-wrapper theme-bg-${currentTheme}-darker theme-text-${currentTheme}-1`}>


                <section className="cartpage__orderslist_wrapper">

                    <div className='cartpage__headerwrapper'>
                        {/* check if it's a guest or not */}
                        <h1 className={`cartpage__orderslist_wrapper-title theme-text-${currentTheme}-2`}>
                            
                        {!loggedInUser ? 'Guest check out' : 
                            <div>Check out for <span className='capitalize'>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</span></div>}
                        
                        </h1>
                        <button className={`cartpage__orderbutton_desktop hover-theme-bg-${currentTheme}-darkest`} onClick={handlePlaceOrder}>Place Order</button>
                    </div>

                    <hr />


                    <div className={`cartpage__orderslist_wrapper-content theme-text-${currentTheme}-2`}>
                        

                        <div className="cartpage__orderslist_content_wrapper">

                            <div className="cartpage__contentwrapper_header">
                                <div className="cartpage__contentwrapper_col1">Name</div>
                                <div className="cartpage__contentwrapper_qtyheader">Qty</div>
                                <div className="cartpage__contentwrapper_col3">Cost</div>
                                <div className="cartpage__contentwrapper_col4">Del</div>
                            </div>

                            {!productsInCart.length ? <h1 className='text-center'>Cart is empty</h1> : displayList() }

                        </div>

                        <hr />

                        <div className='cartpage__totalwrapper'>

                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">Subtotal:</div>
                                <div className="cartpage__total_col2">{cf.format(cartTotals.subTotal, {code: 'USD'}) ?? 0}</div>
                                <div className="cartpage__total_col3"></div>
                            </div>

                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">HST:</div>
                                <div className="cartpage__total_col2">{cf.format(cartTotals.hstTotal, {code: 'USD'}) ?? 0}</div>
                                <div className="cartpage__total_col3"></div>
                            </div>


                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">Grand total:</div>
                                <div className="cartpage__total_col2">{cf.format(cartTotals.grandTotal, {code: 'USD'}) ?? 0}</div>
                                <div className="cartpage__total_col3"></div>
                            </div>

                        </div>

                        <button className={`cartpage__orderbutton_mobile theme-text-${currentTheme}-1`} onClick={handlePlaceOrder}>Place Order</button>

                    </div>


                </section>

            </section>




        </motion.main>
    )};

export default Cart;