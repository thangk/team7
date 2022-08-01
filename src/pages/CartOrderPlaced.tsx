import { useNavigate } from "react-router-dom";




const CartOrderPlaced = () => {

    
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
        <main className="cartorderplaced__wrapper">

            <h1 className="page-title">Cart</h1>

            <section className="cartorderplaced__content-wrapper">


                <section className="cartorderplaced__orderslist_wrapper">

                    <div className='cartorderplaced__headerwrapper'>
                        <h1 className="cartorderplaced__orderslist_wrapper-title">Your order has been received.</h1>
                    </div>

                    <hr />


                    <div className="cartorderplaced__orderslist_wrapper-content">
                        
                        <h1>Thank you for your business. You may view your orders in your account.</h1>

                        <button onClick={() => navigate('/account')}>Go to account</button>

                    </div>


                </section>

            </section>




        </main>
    )};

export default CartOrderPlaced;