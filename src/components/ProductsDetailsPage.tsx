import React from "react";
import { useState } from "react";
import noimage from '../images/icons/noimage.jpg'
import { useParams } from 'react-router-dom';
import api from '../api/base';
//import data from "../assets/template.json";
import { useSelector } from 'react-redux'
import axios from "axios";

function ProductsDetailsPage() {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

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
  
  const [watch, setWatch] = useState(defaultWatch)
  const { id } = useParams(); //URL id parameter from router in App component

  async function getWatch() {

    let response = await api.get(`/watches/${id}`)
    const {data: watchData} = response
    setWatch(watchData)
  }

  getWatch();


  return (
    
    <>
      <div className='product-details-wrapper'>
        <h1 className={`page-title product-details-title theme-text-${currentTheme}`}>{watch.name}</h1>

        <div className='inner-flex'>

          <img className='product-details-image' src={noimage} alt='noimage' />

          <div className={`product-details-text theme-text-${currentTheme}`}>
            
            <div className='price-field'>{watch.price} </div>
            <div><b>ID:</b> {watch.id}</div>
            <div><b>Brand:</b> {watch.brand} </div>
            <div><b>Case Color:</b> {watch.caseColour} </div>
            <div><b>Band Color:</b> {watch.bandColour} </div>
            <div><b>Band Type:</b> {watch.bandType} </div>
            <div><b>Movement Type:</b> {watch.movementType} </div>
            <div><b>Face Size:</b> {watch.faceSize} </div>
            
            <button className={`btn theme-bg-${currentTheme}-darker`}>Add to Cart</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default ProductsDetailsPage