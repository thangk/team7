
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import noimage from '../images/icons/account-icon.png'


// @ts-ignore
const Account = ({ children }) => {

    const [pagetitle, setPageTitle] = useState('')

    const { currentTheme } = useTheme()

    const handleLogout = () => {

    }

    return (
        <motion.main 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className={`accountpage-wrapper theme-text-${currentTheme}-1`}>

            <h1 className="page-title">Account</h1>

            <section className={`accountpage-content-wrapper theme-bg-${currentTheme}-darker`}>


                <section className="accountpage-leftpanel">

                    <div className="accountpage-userinfo">

                        <img src={noimage} alt='profile' />

                        <h1 className='accountpage-userinfo-name'>Kap Thang</h1>

                    </div>

                    <nav className="accountpage-nav">

                        <Link to='/account' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `}>Dashboard</Link>
                        <Link to='/account/orders' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `}>Orders</Link>
                        <Link to='/account/settings' className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `}>Account Settings</Link>
                        <button className={`accountpage-nav-item hover-theme-bg-${currentTheme}-darkest `} onClick={handleLogout}>Logout</button>

                    </nav>

                </section>


                <section className="accountpage-rightpanel">

                    <h1 className="accountpage-rightpanel-title">{pagetitle}</h1>

                    <hr className={`theme-border-${currentTheme}-dark`} />


                    <div className="accountpage-rightpanel-content">

                        
                        {/* List of Orders */}
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child, { setPageTitle })
                            )}

                    </div>


                </section>

            </section>




        </motion.main>
    )};

export default Account;