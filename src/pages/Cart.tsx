// import { format } from 'date-fns'
import { motion } from 'framer-motion';
import { FiDelete } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';


const Cart = () => {

    const { currentTheme } = useTheme()

    const navigate = useNavigate()

    // @ts-ignore
    const handlePlaceOrder = (e) => {
        e.preventDefault()

        navigate('/cart/order-placed')
    }

    // @ts-ignore
    const handleDeleteItem = (e) => {
        e.preventDefault()

        // alert('deleting')
        // console.log('deleting')
    }

    return (
        <motion.main 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className={`cartpage-wrapper theme-text-${currentTheme}-1`}>

            <h1 className="page-title">Cart</h1>

            <section className={`cartpage-content-wrapper theme-bg-${currentTheme}-darker theme-text-${currentTheme}-1`}>


                <section className="cartpage__orderslist_wrapper">

                    <div className='cartpage__headerwrapper'>
                        {/* check if it's a guest or not */}
                        <h1 className={`cartpage__orderslist_wrapper-title theme-text-${currentTheme}-1`}>Check out for <span className='capitalize'>kap thang</span></h1>
                        <button className={`cartpage__orderbutton_desktop hover-theme-bg-${currentTheme}-darkest`} onClick={handlePlaceOrder}>Place Order</button>
                    </div>

                    <hr />


                    <div className={`cartpage__orderslist_wrapper-content theme-text-${currentTheme}-2`}>
                        

                        <div className="cartpage__orderslist_content_wrapper">

                            <div className="cartpage__contentwrapper_header">
                                <div className="cartpage__contentwrapper_col1">Name</div>
                                <div className="cartpage__contentwrapper_col2">Qty</div>
                                <div className="cartpage__contentwrapper_col3">Cost</div>
                                <div className="cartpage__contentwrapper_col4">Del</div>
                            </div>


                            <div className={`cartpage__contentwrapper_item theme-text-${currentTheme}-1 theme-bg-${currentTheme}`}>
                                <div className="cartpage__contentwrapper_col1">Apple Watch 3</div>
                                <div className="cartpage__contentwrapper_col2">342</div>
                                
                                <div className="cartpage__contentwrapper_col3">$5034.00</div>
                                <div className="cartpage__contentwrapper_col4">
                                    <FiDelete className='cartpage__deletebutton' onClick={handleDeleteItem} />
                                </div>
                            </div>

                            <div className={`cartpage__contentwrapper_item theme-text-${currentTheme}-1 theme-bg-${currentTheme}`}>
                                <div className="cartpage__contentwrapper_col1">Apple Watch 3</div>
                                <div className="cartpage__contentwrapper_col2">2</div>
                                
                                <div className="cartpage__contentwrapper_col3">$50.00</div>
                                <div className="cartpage__contentwrapper_col4">
                                    <FiDelete className='cartpage__deletebutton' onClick={handleDeleteItem} />
                                </div>
                            </div>

                            <div className={`cartpage__contentwrapper_item theme-text-${currentTheme}-1 theme-bg-${currentTheme}`}>
                                <div className="cartpage__contentwrapper_col1">Apple Watch 3</div>
                                <div className="cartpage__contentwrapper_col2">2</div>
                                
                                <div className="cartpage__contentwrapper_col3">$50.00</div>
                                <div className="cartpage__contentwrapper_col4">
                                    <FiDelete className='cartpage__deletebutton' onClick={handleDeleteItem} />
                                </div>
                            </div>

                        </div>

                        <hr />

                        <div className='cartpage__totalwrapper'>
                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">HST:</div>
                                <div className="cartpage__total_col2">$5034.00</div>
                                <div className="cartpage__total_col3"></div>
                            </div>

                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">Subtotal:</div>
                                <div className="cartpage__total_col2">$5034.00</div>
                                <div className="cartpage__total_col3"></div>
                            </div>

                            <div className="cartpage__total_item">
                                <div className="cartpage__total_col1">Grand total:</div>
                                <div className="cartpage__total_col2">$5034.00</div>
                                <div className="cartpage__total_col3"></div>
                            </div>

                        </div>

                        <button className='cartpage__orderbutton_mobile' onClick={handlePlaceOrder}>Place Order</button>

                    </div>


                </section>

            </section>




        </motion.main>
    )};

export default Cart;