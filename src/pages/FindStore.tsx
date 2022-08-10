import React from 'react';
import { useSelector } from 'react-redux'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function FindStore(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)

        // University of Windsor's coordinates
        const defaultCoords = { lat: 42.307684, lng: -83.068468 }

        // setup map
        const render = (status: Status) => {
            return <h1>{status}</h1>;
          };
          
          <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
            
          </Wrapper>

    



    return (
        
        <main className="find-store-wrapper">
            <h1 className={`find-store-page-title theme-text-${currentTheme}-1`}>Find a Store</h1>
            {/* added theme-font-2 and border colour -- Kap */}
            <div className={`find-store-content-wrapper theme-text-${currentTheme}-1 theme-border-${currentTheme}-light theme-font-2`}>
                

                </div>
                
                


        </main>
    )

}

export default FindStore;