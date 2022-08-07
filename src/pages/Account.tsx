
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noimage from '../images/icons/account-icon.png'
import { useSelector, useDispatch } from 'react-redux'
import api from '../api/base'
import { useAuth } from '../contexts/AuthContext';
import { setLoggedInUser } from '../features/loggedInUserSlice';

// @ts-ignore
const Account = ({ children }) => {

    const { currentUser, signout } = useAuth()

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

    // @ts-ignore
    const pageTitle = useSelector(state => state.accountArea.pagetitle)

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    const currentProfilePic = loggedInUser.imageUpload ? loggedInUser.imageUpload : noimage

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogout = async () => {
        await signout()
        dispatch(setLoggedInUser(null))
        navigate('/login')
    }

    useEffect(() => {


        if (!loggedInUser) {
            navigate('/login')
        }


        const fetchCustomers = async () => {
            try {
                const { data } = await api.get(`/customers`)
                
                for (const customer of data) {

                    if (customer.email === currentUser.email) {
                        dispatch(setLoggedInUser(customer))
                        console.log(loggedInUser)
                        return
                    }
                }

            } catch {
                console.log('Failed to fetch.')
            }

        }

        fetchCustomers()

    })
    

    return (
        <motion.main 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className={`accountpage-wrapper theme-text-${currentTheme}-1`}>

            <h1 className="page-title">Account</h1>

            <section className={`accountpage-content-wrapper theme-bg-${currentTheme}-darker`}>


                <section className="accountpage-leftpanel">

                    <div className="accountpage-userinfo">

                        <img src={currentProfilePic} alt='profile' />

                        {/* @ts-ignore */}
                        <h1 className='accountpage-userinfo-name'>{loggedInUser ? ` ${loggedInUser.firstName} ${loggedInUser.lastName}` : 'John Doe'}</h1>

                    </div>

                    <nav className="accountpage-nav">

                        <Link to='/account/dashboard' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest`}>Dashboard</Link>
                        <Link to='/account/orders' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `}>Orders</Link>
                        <Link to='/account/settings' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `}>Account Settings</Link>
                        <button className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `} onClick={handleLogout}>Logout</button>

                    </nav>

                </section>


                <section className="accountpage-rightpanel">

                    <h1 className="accountpage-rightpanel-title">{pageTitle}</h1>

                    <hr className={`theme-border-${currentTheme}-dark`} />


                    <div className="accountpage-rightpanel-content">

                        
                     

                            {children}

                    </div>


                </section>

            </section>




        </motion.main>
    )};

export default Account;