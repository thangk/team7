import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";




const CartOrderPlaced = () => {

    const { currentTheme } = useTheme()

    
    const navigate = useNavigate()

    // // @ts-ignore
    // const handlePlaceOrder = (e) => {
    //     e.preventDefault()
    // }

    // // @ts-ignore
    // const handleDeleteItem = (e) => {
    //     e.preventDefault()

    //     // alert('deleting')
    //     // console.log('deleting')
    // }

    return (
        <main className={`cartorderplaced__wrapper theme-text-${currentTheme}-1`}>

            <h1 className="page-title">Cart</h1>

            <section className={`cartorderplaced__content-wrapper theme-bg-${currentTheme}-darker`}>


                <section className="cartorderplaced__orderslist_wrapper">

                    <div className='cartorderplaced__headerwrapper'>
                        <h1 className={`cartorderplaced__orderslist_wrapper-title theme-text-${currentTheme}-1`}>Your order has been received.</h1>
                    </div>

                    <hr />


                    <div className="cartorderplaced__orderslist_wrapper-content">
                        
                        <h1 className={`theme-text-${currentTheme}-2`} >Thank you for your business. You may view your orders in your account.</h1>

                        <button className={`hover-theme-bg-${currentTheme}-darkest`} onClick={() => navigate('/account')}>Go to account</button>

                    </div>


                </section>

            </section>




        </main>
    )};

export default CartOrderPlaced;