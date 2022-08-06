import React from 'react';
import { useNavigate } from "react-router-dom";

function AboutUs(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)


    const navigate = useNavigate();

    return (

        <main className= "about-us-wrapper">
            <h1>Hello sir!</h1>


        </main>
    )

}

export default AboutUs;