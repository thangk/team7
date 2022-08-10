import React from 'react';
import { useSelector } from 'react-redux'




function ContactUs(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)



    return (
        
        <main className="contact-us-wrapper">
            <h1 className={`contact-us-page-title theme-text-${currentTheme}-1`}>Contact Us</h1>
            {/* added theme-font-2 and border colour -- Kap */}
            <div className={`contact-us-content-wrapper theme-text-${currentTheme}-1 theme-border-${currentTheme}-light theme-font-2`}>
                
                <p>
                If you have any questions or concerns regarding Infinity watches website, or the company in general,
                feel free to contact us in any of the forms below. Please understand that our staff in entirely human.
                You will not recieve an automated response, due to this you may experience longer wait times.
                </p>
                <p>There is also a FAQ page that you can view and might find similar problems there</p>
                <p>Phone Number: 234 543 8472</p>
                <p>Email Address: InfinityWatchesSupport@InfinityWatches.ca</p>
                <p>Mailing Address: 123 Cool St - Postal Code: N67J4F</p>
                </div>
                
                


        </main>
    )

}

export default ContactUs;