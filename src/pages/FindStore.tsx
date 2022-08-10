import React from 'react';
import { useSelector } from 'react-redux'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function FindStore(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

        // University of Windsor's coordinates
        const defaultCoords = { lat: 42.307684, lng: -83.068468 }

        
    



    return (
        
        <main className="find-store-wrapper">
            <h1 className={`find-store-page-title theme-text-${currentTheme}-1`}>Find a Store</h1>
            {/* added theme-font-2 and border colour -- Kap */}
            <div className={`find-store-content-wrapper theme-text-${currentTheme}-1 theme-border-${currentTheme}-light theme-font-2`}>
            <iframe style={{width: "100%", height: "600px"}} src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=university%20of%20windsor%20Windsor+(Infinity%20Watches%20Headquarters)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
                


        </main>
    )

}

export default FindStore;