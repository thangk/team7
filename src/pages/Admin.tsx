import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminNavLinks, adminPanelTexts } from "../components/Constants";
import logo from '../images/icons/logo2-icon.png'
import defaultuser from '../images/test_users/user.png'

import { useAuth } from '../contexts/AuthContext'
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../customHooks/useDimension";
import { MenuListAdmin, MenuToggleAdmin } from "../components/HeaderMenuAdmin";

import { useSelector, useDispatch } from 'react-redux'
import { setLoggedInUser } from "../features/loggedInUserSlice";


// @ts-ignore
const Admin = ({ children }) => {

    const location = useLocation();
    const { currentAdmin, signout } = useAuth()

    

    const navigate = useNavigate()

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const [profilePic, setProfilePic] = useState(defaultuser)

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    const dispatch = useDispatch()

    let defaultTitle = 'Dashboard';

    switch(location.pathname) {
        case '/admin/dashboard': defaultTitle = 'Dashboard'; break;
        case '/admin/admins': defaultTitle = 'Administrators'; break;
        case '/admin/customers': defaultTitle = 'Customers'; break;
        case '/admin/products': defaultTitle = 'Products'; break;
        case '/admin/ie': defaultTitle = 'Import / Export'; break;
        case 'admin/statuscheck': defaultTitle = 'Status Check'; break;
        case 'admin/doc': defaultTitle = 'Admin Documentation'; break;
        default: break;
    }

    const [pageTitle, setPageTitle] = useState(defaultTitle);


    const handleSignout = async () => {
        try {
            await signout()
            dispatch(setLoggedInUser(null))
            navigate('/admin')
        } catch (e) {
            // @ts-ignore
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (loggedInUser && loggedInUser.imageUpload) {
            setProfilePic(loggedInUser.imageUpload)
        }

    }, [loggedInUser])

    return (
        <main className="admin__page-wrapper">

            {/* mobile view menu */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="admin__menu_wrapper"
            >
                
                <div className="admin__menu_bg">
                <MenuToggleAdmin toggle={() => toggleOpen()} />
                {isOpen && <MenuListAdmin isOpen={isOpen} />}
                </div>
            </motion.div>



            <section className="admin__left-panel">

                <section className="admin__company-info">

                    <div className="admin__logo-icon">
                        <img src={logo} alt='logo' />
                    </div>
                    <h1>{adminPanelTexts.title}</h1>

                </section>


                <section className="admin__nav">


                {adminNavLinks.map(item => {
                        return (
                            <Link to={item.url} onClick={() => setPageTitle(item.name)} key={item.name}>
                                <div className="admin__nav-item" key={item.name} >
                                    {item.icon}
                                    {item.name}
                                </div>
                            </Link>
                        )
                    })}
                    


                </section>

                <section className="admin__company-footer-info-wrapper">

                    <h1>{adminPanelTexts.versionName}</h1>
                    <h1>{adminPanelTexts.versionNumber}</h1>

                </section>



            </section>


            <section className="admin__right-panel">


                <section className="admin__page-title-wrapper">
                    <h1>{pageTitle}</h1>


                    <div className="admin__user-info-logout-wrapper">
                            
                        <div className="admin__user-icon-wrapper">
                            <img src={profilePic} alt='user profile icon' />
                            <h1 className="admin__username-text">{loggedInUser ? `${loggedInUser.firstName} ${loggedInUser.lastName}`: currentAdmin.email}</h1>
                        </div>

                        <button className="admin__logout-button" onClick={handleSignout}>Logout</button>

                    </div>
                </section>


                <section className="admin__page-content-wrapper">
                    
                    {children}

                </section>


            </section>


        </main>
    )};

export default Admin;