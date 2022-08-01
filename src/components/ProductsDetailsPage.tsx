import React, { useState } from "react";
import noimage from '../images/icons/noimage.jpg'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import api from '../api/base';
import data from "../assets/template.json";


function ProductsDetailsPage() {

  // set the watch we fetched from the api to this, so we can use it to display it later in the jsx portion
  const defaultWatch = {
    "name": "Default",
    "price": "0",
    "brand": "N/A",
    "desc": "N/A",
    "caseColour": "N/A",
    "bandColour": "N/A",
    "bandType": "N/A",
    "movementType": "N/A",
    "faceSize": "N/A",
    "id": "N/A"
  }
  const [watch, setWatch] = useState(defaultWatch);
  const { id } = useParams(); //URL id parameter from router in App component

  let currentWatch = data.find(watch => watch.id === id); //Finding watch with current id in database (template json)

  if(currentWatch === undefined) {
    currentWatch = defaultWatch;
  }

  // setWatch(currentWatch);
  //NOTE: Need to fix and have it work with useState, it just gave a blank white screen last time trying


  return (
    
    <>
      <div className='product-details-wrapper'>
        <h1 className='page-title product-details-title'>{currentWatch.name}</h1>

        <div className='inner-flex'>

          <img className='product-details-image' src={noimage} alt='noimage' />

          <div className='product-details-text'>
            
            <div className='price-field'>{currentWatch.price} </div>
            <div><b>ID:</b> {currentWatch.id}</div>
            <div><b>Brand:</b> {currentWatch.brand} </div>
            <div><b>Case Color:</b> {currentWatch.caseColour} </div>
            <div><b>Band Color:</b> {currentWatch.bandColour} </div>
            <div><b>Band Type:</b> {currentWatch.bandType} </div>
            <div><b>Movement Type:</b> {currentWatch.movementType} </div>
            <div><b>Face Size:</b> {currentWatch.faceSize} </div>
            
            <button className='btn'>Add to Cart</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default ProductsDetailsPage