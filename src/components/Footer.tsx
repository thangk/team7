import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";





const Footer = () => {

    

    return (
        <>
        <div className="footers-wrapper">
            <main className="footer1-wrapper">

                <section className="footer-brand-name-wrapper">
                    <h1 className="footer-brand-name">Infinity Watches</h1>
                </section>

                <section className="footer-links">

                    <div className="footer-links-left">
                        <Link className="footer-link-item" to='/careers'>Careers</Link>
                        <Link className='footer-link-item' to='/consumer-care'>Consumer care</Link>
                        <Link className='footer-link-item' to='/our-watches'>Our watches</Link>
                        <Link className='footer-link-item' to='/ica'>Infinity Watches Canada</Link>
                        <Link className='footer-link-item' to='/success-stories'>Success stories</Link>
                        <Link className='footer-link-item' to='/ius'>Infinity Watches U.S.A.</Link>
                    </div>

                    <div className="footer-links-right">
                        <form id='email-sub-form'>

                        <label htmlFor="email-sub">Get the latest Infinity news</label>
                        <div>
                        <input type='email' className='email-sub' name="email-sub" size={30} required />
                        <button type="submit" form="email-sub-form">Subscribe</button>
                        </div>

                        <div>
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
                <hr />
                <section className="footer2-links-wrapper">
                    <Link className='footer-link-item' to='tos'>Terms of Service</Link>|
                    <Link className='footer-link-item' to='privacy-policy'>Privacy Policy</Link>|
                    <Link className='footer-link-item' to='accessibility-statement'>Accessibility Statement</Link>
                </section>
                <h1 className="footer2-copyright">&copy;2022 Infinity Watches, LLC. All Rights Reserved.</h1>
            </main>
            </div>
        </>
    )};

export default Footer;