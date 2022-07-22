import React from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../assets/errorimages.json'
import test from "../images/error_images/ei1.jpg"

function ErrorPage() {

  const navigate = useNavigate();

  // const errArray = JSON.parse(errorImages)

  console.log(images.images[0])

  return (
    <main className='errorpage-wrapper'>

      <h1>404 Error</h1>

      <img src={test} alt='error' />

      <p>The page you're trying to visit doesn't exist.</p>

      <button className='backbutton' onClick={() => navigate(-1)}>Go Back</button>



    </main> 
  )
}

export default ErrorPage