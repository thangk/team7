import React, { useEffect } from "react";
import { useState } from "react";
import noimage from '../images/icons/noimage.jpg'
import { useParams } from 'react-router-dom';
import api from '../api/base';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../features/guestSlice";
import { AxiosError } from "axios";

function ProductsDetailsPage() {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  // set the watch we fetched from the api to this, so we can use it to display it later in the jsx portion
  const defaultWatch = {
    "name": "Default",
    "price": "0",
    "imageUrl": noimage,
    "imageUpload": null,
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

  /*Fetching watch to populate properties*/
  useEffect(() => {
    async function getWatch() {
      try {
        const { data } = await api.get(`/watches/${id}`)
        setWatch(data);
      } catch {
        console.log('Failed to get watch')
      }
    }

    getWatch();

  }, [id])


  // @ts-ignore
  const whoIsLoggedInUser = useSelector(state => state.loggedInUser.current)

  // this will get customer's info
  const loggedInUser = !whoIsLoggedInUser ? null : whoIsLoggedInUser.role === 'Customer' ? whoIsLoggedInUser : null

  const dispatch = useDispatch()

  // @ts-ignore
  const handleAddToCart = async (watchId, e) => {
    e.preventDefault()

    // if guest account
    if (!loggedInUser) {
        dispatch(addToCart(watchId))    // we pass in watchId here and it'll be added to guest account
        return
    }

    // if registered account
    try {
    
        await api.post(`/cart-watches`, {
            cartId: loggedInUser.cartId,
            watchId
        })
    
    } catch (error) {
    
        const err = error as AxiosError
    
        console.log(err.response?.data)
        console.log(err.response?.status)
        console.log(err.response?.headers)
    }

  }

  return (
    
    <>
      <div className='product-details-wrapper'>
        <h1 className={`page-title product-details-title theme-text-${currentTheme}`}>{watch.name}</h1>

        <div className='inner-flex'>

          <img className='product-details-image' src={watch.imageUrl} alt='noimage' />

          <div className={`product-details-text theme-text-${currentTheme}`}>
            
            <div className='price-field'>${watch.price} </div>
            <div><b>ID:</b> {watch.id}</div>
            <div><b>Brand:</b> {watch.brand} </div>
            <div><b>Case Color:</b> {watch.caseColour} </div>
            <div><b>Band Color:</b> {watch.bandColour} </div>
            <div><b>Band Type:</b> {watch.bandType} </div>
            <div><b>Movement Type:</b> {watch.movementType} </div>
            <div><b>Face Size:</b> {watch.faceSize} </div>
            {/*@ts-ignore*/}
            <button className={`btn theme-bg-${currentTheme}-darker`} onClick={e => handleAddToCart(watch.id, e)}>Add to Cart</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default ProductsDetailsPage