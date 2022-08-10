import React from "react";
import { useSelector } from 'react-redux'


function FAQPage() {

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)


  return (
    <div className="FAQ-wrapper">
        <h1 className={`FAQ-page-title theme-text-${currentTheme}-3`}>Frequently Asked Questions</h1>
            <div className={`FAQ-content-wrapper theme-text-${currentTheme}-3 theme-border-${currentTheme}-light theme-font-2`}>
                <h3> How do I cancel/unsubscribe from the newsletter? </h3>
                <p> Simply scroll to the bottom of any email you receive from us and click the “Unsubscribe” link. </p>

                <h3>How do I add things to my cart? </h3>
                <p>When viewing a product, you would like to purchase, click the “add to cart” button at the bottom of the item's description page.</p>

                <h3>How do I set a delivery address? </h3>
                <p>Once you enter your “Cart” simply follow the next steps and there will be an address bar where you can input your address.</p>

                <h3>How do I create an account? </h3>
                <p>To create an account, select the “Account” button located in the top right of the screen, then it will bring you to the login page and at the bottom of the window there will be a link that reads “Sign Up here”. Click that link and fill out your information.</p>

                <h3>How do I access my account? </h3>
                <p>After signing up for an account, you should receive an email to verify, then once you’ve verified, come back to the login page (“Account” -{">"} ”Login”) and input your account information to log in.</p>

                <h3>Where do I go for refunds and returns? </h3>
                <p>As of right now there is no built-in feature to receive refunds or return items, however if you go to the “menu” button on the top right of the screen and select “contact”, you can let us know your problem and we can process a refund request from there.</p>

                <h3>How do I change my language? </h3>
                <p>Languages are set automatically based on the user's computer language settings. If you would like to change the pages language, change your PC’s default language.</p>

                <h3>What currency am I paying in? </h3>
                <p>All transactions and payments are made in CAD. </p>

                <h3>Do I need debit or credit to pay? </h3>
                <p>We accept both Debit and Credit (with certain exceptions) as well as PayPal.</p>

                <h3>How can I find watches with specific watch face sizes? </h3>
                <p>While in the products page section, use the “Search” table feature on the left side of the screen to search for your desired watch face size. All watches with that face size will be displayed to you. </p>
                
                <br></br>
                <h3>Admin Options</h3>
                <ul>
                    <li>- Admins can add/remove/edit products and product info</li>
                    <li>- Admins can change site themes and layout</li>
                    <li>- Admins can add new payment types once approved </li>
                    <li>- Admins can add different site language options based on IP Addresses</li>
                    <li>- Admins can update/edit TOS or other text-based resources </li>
                </ul>
            </div>
    </div>
  )
}

export default FAQPage
