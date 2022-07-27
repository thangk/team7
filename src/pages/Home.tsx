import watch from "../images/icons/watch.jpg";
import React from 'react'

function Home() {
  return (
    //@ts-ignore
    
    <>
      <h1 className="page-title-center">"Revolutionizing the way you Shop for Watches"</h1>
      <br></br>
      <br></br>
      <div className="background-wrapper">

        <div className="background-image">
          <img src={watch} alt="watch" />
        </div>
      </div>
      <h1 className="page-title-center">Newest Additions</h1>


      </>
    //Adding comment to test pull request
  )
}

export default Home