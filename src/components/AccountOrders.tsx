import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../features/accountAreaSlice';


const AccountOrders = () => {

    const today = format(new Date(),'dd-MM-yyyy');

    const dispatch = useDispatch()

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

    dispatch(setPageTitle('orders'))

    const staticData = [
        {
            name: 'Apple Watch 3',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Samsung Galaxy Watch 4',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Google Watch',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Rolex 5000 Ultra',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Garmin Smart Watch',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Mobvoi Ticwatch Pro 3 Ultra',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Skagen Hybrid HR Jorn',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Casio ProTrek PRW-61',
            qty: 2,
            orderDate: today
        },
        {
            name: 'Fitbit Sense',
            qty: 2,
            orderDate: today
        }
    ]

    const watchesArrayList = staticData.map(item => {
        return (
            <div className={`accountorders__contentwrapper_item hover-theme-bg-${currentTheme}-darkest`}>
                    <div className="accountorders__contentwrapper_col1">{item.name}</div>
                    <div className="accountorders__contentwrapper_col2">{item.qty}</div>
                    
                    <div className="accountorders__contentwrapper_col3">{item.orderDate}</div>
                </div>
        )
    })

    return (
        <main className={`accountorders__pagewrapper theme-text-${currentTheme}-1`}>

                <div className="accountorders__contentwrapper_header">
                    <div className="accountorders__contentwrapper_col1">Name</div>
                    <div className="accountorders__contentwrapper_col2">Qty</div>
                    <div className="accountorders__contentwrapper_col3">Date</div>
                </div>

                <hr className="accountorders__hr col-span-3" />

                {watchesArrayList}



        </main>
    )};

export default AccountOrders;