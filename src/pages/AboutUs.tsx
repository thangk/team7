import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import logo from "../images/icons/logo2-icon.png";



function AboutUs(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)


    const navigate = useNavigate();

    return (
        
        <main className="about-us-wrapper">
            <h1 className={`about-us-page-title theme-text-${currentTheme}-1`}>About us</h1>
            <div className={`about-us-content-wrapper theme-text-${currentTheme}-1`}>
                <p>
                    Infinity watches is a store where you can buy a wide variety of watches all in one place.
                    Brand name watches can be purchased from our website for a normal price and shipped to the seller at a rapid pace.
                    The reason our company is a valuable asset to the watch selling market is due to the quick delivery and 
                    international shipping that we provide. With watches being very expensive, not all are available or trusted online. 
                    Infinity watches ensures the fact that your watch will be delivered with efficiency and quality every step of the way.
                    Our goal is to revolutionize the way people shop for watchings. The future of watch shopping is here 
                    and our development team is ready to take this company to the moon. We originally came up with this
                    idea back in 2018. Our team was just a bunch of guys who loved watches and computer science.
                    We started off by selling watches at a garage sale. Simply refurbishing and reselling them for a greater
                    price. The idea dawned on us one day and we figured out we could turn this into a much bigger project
                    using our degrees. The intial office was held in one of our garages for the first while until things escalated. Now infinity
                    watches is doing better than ever. We have developed a website for all the watches we loved as kids. We 
                    have made numerous deals with other companies and developed many partnerships from around the world.
                </p>
                <p>
                    The plans for infinity wacthes future is to sell multiple products. We would love to one day create
                    a one stop shop for all accessories related to fashion wear. Expanding our partnerships and becoming
                    much larger in the years to come. Our development team is ready for the challenge and excited to get 
                    started. Eventually we look to get building locations to sell product locally. This way we can take 
                    infinity watches off of just the website and make it a physical experience as well. A secret that we are 
                    excited to announce is the addition of our own brand making watches in the near future. There is so much more 
                    to come in the world of Infinity Watches and we are happy to be on this journey with everyone.
                </p>
                <div className="background-wrapper">
                    <img src={logo} alt="logo"/>
                </div>
                
                

            </div>


        </main>
    )

}

export default AboutUs;