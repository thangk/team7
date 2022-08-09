import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'



const Footer = () => {

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)


    // @ts-ignore
    const handleEmailSubmit = (e) => {
        e.preventDefault()

        alert('Thank you for subscribing to our newsletter!')
    }

    return (
        <div className={`flex-1 theme-bg-${currentTheme} flex flex-end`}>
        <div className={`footers-wrapper theme-bg-${currentTheme}-darker theme-text-${currentTheme}-2`}>
            <main className="footer1-wrapper">

                <section className="footer-brand-name-wrapper">
                    <h1 className="footer-brand-name">Infinity Watches</h1>
                </section>

                <section className="footer-links">

                    <div className="footer-links-left">
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/careers'>Careers</Link>
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/consumer-care'>Consumer care</Link>
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/our-watches'>Our watches</Link>
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/iwca'>Infinity Watches Canada</Link>
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/success-stories'>Success stories</Link>
                        <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/iwus'>Infinity Watches U.S.A.</Link>
                    </div>

                    <div className="footer-links-right">
                        <form id='email-sub-form' onSubmit={handleEmailSubmit}>

                        <label htmlFor="email-sub">Get the latest Infinity news</label>
                        <div>
                        <input type='email' className={`theme-focus-ring-${currentTheme}`} name="email-sub" size={30} required />
                        <button type="submit" className={`theme-border-${currentTheme} theme-bg-${currentTheme} theme-text-${currentTheme}-1`} form="email-sub-form">Subscribe</button>
                        </div>

                        <div className="flex items-center gap-2">
                        <input type='checkbox' className="email-sub-agm" id='email-sub-agm' required />
                        <label htmlFor="email-sub-agm">By checking this box, you agree to subscribe to our newsletter.</label>
                        </div>
                        
                        </form>
                    </div>

                </section>

                <div className="footer-socials">
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                    <FaYoutube />
                </div>



            </main>

            <main className="footer2-wrapper">
                <hr className={`theme-border-${currentTheme}-dark`} />
                <section className="footer2-links-wrapper">
                    <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/terms-of-service'>Terms of Service</Link>|
                    <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/privacy-policy'>Privacy Policy</Link>|
                    <Link className='footer-link-item' onClick={() => window.scrollTo(0, 0)} to='/accessibility-statement'>Accessibility Statement</Link>
                </section>
                <h1 className="footer2-copyright">&copy;2022 Infinity Watches, LLC. All Rights Reserved.</h1>
            </main>
            </div>
        </div>
    )};

export default Footer;