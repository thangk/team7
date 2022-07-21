import React, { useRef, useState } from 'react'

import { motion, useCycle } from 'framer-motion'
// import logo from '../images/icons/logo-icon.png'
// import account from '../images/icons/account-icon.png'
import logo2 from '../images/icons/logo2-icon.png'
import data from '../assets/template.json'
import noimage from '../images/icons/noimage.jpg'
// import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { nanoid } from 'nanoid'
import { AiFillShopping, AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineUser } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import ProductsFilterPanel from '../components/ProductsFilterPanel'
import { MenuToggle, MenuList } from '../components/HeaderMenu'
import { useDimensions } from '../customHooks/useDimension'

function Products_DetailsPage() {
  return (
    
    <>
      <h1 className='page-title'>Product Title</h1>

      <div className='product-details-wrapper'>
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