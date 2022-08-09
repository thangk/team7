import React from 'react';
import { useSelector } from 'react-redux'




function ContactUs(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)



    return (
        
        <main className="contact-us-wrapper">
            <h1 className={`contact-us-page-title theme-text-${currentTheme}-1`}>Contact Us</h1>
            {/* added theme-font-2 and border colour -- Kap */}

                
                


        </main>
    )

}

export default ContactUs;