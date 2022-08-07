import { useDispatch } from 'react-redux'
import { setPageTitle } from '../features/accountAreaSlice';

const AccountDashboard = () => {

    const dispatch = useDispatch()

    dispatch(setPageTitle('dashboard'))

    

    return (
        
        <main className="accountdashboard__dashboard_wrapper">


            <section className="accountdashboard__numoforders">

                <h1>9</h1>
                <h2>orders</h2>

            </section>

            <section className="accountdashboard__numofitemsincart">

                <h1>3</h1>
                <h2>in cart</h2>

            </section>

        </main>
    )};

export default AccountDashboard;