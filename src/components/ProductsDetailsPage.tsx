import React from 'react'
import noimage from '../images/icons/noimage.jpg'

function ProductsDetailsPage() {
  return (
    
    <>
      <div className='product-details-wrapper'>
        <h1 className='page-title product-details-title'>Product Title</h1>

        <div className='inner-flex'>

          <img className='product-details-image' src={noimage} alt='noimage' />

          <div className='product-details-text'>
            
            <div className='price-field'>$300 </div>
            <div>Brand: </div>
            <div>Case Color: </div>
            <div>Band Color: </div>
            <div>Band Type: </div>
            <div>Movement Type: </div>
            <div>Face Size: </div>
            
            <button className='btn'>Add to Cart</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default ProductsDetailsPage