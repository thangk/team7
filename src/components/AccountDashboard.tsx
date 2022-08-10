import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../features/accountAreaSlice';
import api from '../api/base'
import { AxiosError } from 'axios';
import { CartWatch, Watch } from '../interfaces'

const AccountDashboard = () => {

    const [watchList, setWatchList] = useState<CartWatch[]>([])

    const [watches, setWatches] = useState<Watch[]>([])


    const dispatch = useDispatch()

    // @ts-ignore
    const whoIsLoggedInUser = useSelector(state => state.loggedInUser.current)

    const loggedInUser = !whoIsLoggedInUser ? null : whoIsLoggedInUser.role === 'Customer' ? whoIsLoggedInUser : null

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

    dispatch(setPageTitle('dashboard'))


    const inCartList = () => {

        const getCorrectWatchIds = watchList.filter(item => item.isInCart === true)

        const result: Watch[] = []

        if (getCorrectWatchIds)

        for (const item of getCorrectWatchIds) {
            for (const watch of watches) {
                if (item.watchId === watch.id) {
                    result.push(watch)
                }
            }
        }

        return result
    }

    const ordersList = () => {

        const getCorrectWatchIds = watchList.filter(item => item.isInCart === false)

        const result: Watch[] = []

        if (getCorrectWatchIds)

        for (const item of getCorrectWatchIds) {
            for (const watch of watches) {
                if (item.watchId === watch.id) {
                    result.push(watch)
                }
            }
        }

        return result
    }


    useEffect(() => {

        const fetchDatas = async () => {
            try {
            
                const watchList = await api.get(`/cart-watches/${loggedInUser.id}`)

                const watches = await api.get(`/watches`)

                setWatchList(watchList.data)
                setWatches(watches.data)
            } catch (error) {
            
                const err = error as AxiosError
            
                console.log(err.response?.data)
                console.log(err.response?.status)
                console.log(err.response?.headers)
            }
        }

        fetchDatas()

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(watchList)
    console.log(watches)

    return (
        
        <main className={`accountdashboard__dashboard_wrapper theme-text-${currentTheme}-1`}>


            <section className="accountdashboard__numoforders">

                <h1>{ordersList.length}</h1>
                <h2>orders</h2>

            </section>

            <section className="accountdashboard__numofitemsincart">

                <h1>{inCartList.length}</h1>
                <h2>in cart</h2>

            </section>

        </main>
    )};

export default AccountDashboard;