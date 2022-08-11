import { AxiosError } from 'axios';
import { format } from 'date-fns'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../features/accountAreaSlice';
import { CartWatch, Watch, OrdersList } from '../interfaces';
import api from '../api/base'

const AccountOrders = () => {

    const today = format(new Date(),'dd-MM-yyyy');

    const dispatch = useDispatch()

    const [ordersList, setOrdersList] = useState<OrdersList[]>([])

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

    // @ts-ignore
    const whoIsLoggedInUser = useSelector(state => state.loggedInUser.current)

    const loggedInUser = !whoIsLoggedInUser ? null : whoIsLoggedInUser.role === 'Customer' ? whoIsLoggedInUser : null

    dispatch(setPageTitle('orders'))

    const getOrdersList = async (watchList: CartWatch[], watches: Watch[]) => {
        
        const ordersListWatches = watchList.filter(item => item.isInCart === false)

        

        let tempArray: OrdersList[] = []

        for (const item of ordersListWatches) {

            if (!tempArray.length) {

                tempArray.push({
                    watchId: item.watchId,
                    qty: 1,
                    name: '',
                    orderDate: today
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
                    tempArray.push({
                        watchId: item.watchId,
                        qty: 1,
                        name: '',
                        orderDate: today
                    })
                }
            }

        }

        for (const item of tempArray) {
            const { data } = await api.get(`/watches/${item.watchId}`)

            item.name = data.name
        }

        setOrdersList(tempArray)
    }

    const watchesArrayList = ordersList.map(item => {
        return (
            <div className={`accountorders__contentwrapper_item hover-theme-bg-${currentTheme}-darkest`}>
                    <div className="accountorders__contentwrapper_col1">{item.name}</div>
                    <div className="accountorders__contentwrapper_col2">{item.qty}</div>
                    
                    <div className="accountorders__contentwrapper_col3">{item.orderDate}</div>
                </div>
        )
    })

    useEffect(() => {

        const fetchDatas = async () => {
            try {
            
                const watchList = await api.get(`/cart-watches/${loggedInUser.id}`)

                const watches = await api.get(`/watches`)

                getOrdersList(watchList.data, watches.data)

            } catch (error) {
            
                const err = error as AxiosError
            
                console.log(err.response?.data)
                console.log(err.response?.status)
                console.log(err.response?.headers)
            }
        }

        fetchDatas()

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(watchesArrayList)

    return (
        <main className={`accountorders__pagewrapper theme-text-${currentTheme}-1`}>

                <div className={`accountorders__contentwrapper_header theme-text-${currentTheme}-2`}>
                    <div className="accountorders__contentwrapper_col1">Name</div>
                    <div className="accountorders__contentwrapper_col2">Qty</div>
                    <div className="accountorders__contentwrapper_col3">Date</div>
                </div>

                <hr className="accountorders__hr col-span-3" />

                <div className='accountorders__orderslist_wrapper'>
                    {watchesArrayList.length === 0 ? <h1 className='accountorders__noorderstext'>No orders yet</h1> : watchesArrayList}
                </div>



        </main>
    )};

export default AccountOrders;