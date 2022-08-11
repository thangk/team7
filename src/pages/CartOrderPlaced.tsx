import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { setRefUrl } from "../features/refSlice";


const CartOrderPlaced = () => {

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    // @ts-ignore
    const refUrl = useSelector(state => state.ref.url)

    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    

    useEffect(() => {
        if (refUrl !== '/cart') {
            navigate('/cart')
        }

        dispatch(setRefUrl(''))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <main className={`cartorderplaced__wrapper theme-text-${currentTheme}-1`}>

            <h1 className={`page-title theme-text-${currentTheme}-3`}>Cart</h1>

            <section className={`cartorderplaced__content-wrapper theme-bg-${currentTheme}-darker theme-text-${currentTheme}-1`}>


                <section className="cartorderplaced__orderslist_wrapper">

                    <div className='cartorderplaced__headerwrapper'>
                        <h1 className={`cartorderplaced__orderslist_wrapper-title theme-text-${currentTheme}-2`}>Your order has been received.</h1>
                    </div>

                    <hr />


                    <div className="cartorderplaced__orderslist_wrapper-content">
                        
                        <h1 className={`theme-text-${currentTheme}-2`} >Thank you for your business. You may view your orders in your account.</h1>

                        {!loggedInUser ? 
                        
                        <button className={`hover-theme-bg-${currentTheme}-darkest`} onClick={() => navigate('/signup')}>Register an account</button> : 
                        <button className={`hover-theme-bg-${currentTheme}-darkest`} onClick={() => navigate('/account/dashboard')}>Go to account</button>
                    }
                        

                    </div>


                </section>

            </section>




        </main>
    )};

export default CartOrderPlaced;