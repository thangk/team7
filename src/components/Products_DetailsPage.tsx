import React, { useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import noimage from '../images/icons/noimage.jpg'


function Products_DetailsPage() {
  return (
    
    <>
      <div className='product-details-wrapper'>
        <h1 className='page-title'>Product Title</h1>

        <div className='product-details-image'>
            <img src={noimage} alt='noimage' />
          </div>

          <div className='product-details-text'>
            
            <div>Name: </div>
            <div>Brand: </div>
            <div>Price: </div>
            <div>Case Color: </div>
            <div>Band Color: </div>
            <div>Band Type: </div>
            <div>Movement Type: </div>
            <div>Face Size: </div>
            

          </div>
      </div>
    </>
  )
}

export default Products_DetailsPage