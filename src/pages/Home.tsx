import watch from "../images/icons/watch.jpg";
import React, { useEffect, useState } from 'react';
// import noimage from "../images/icons/noimage.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
// import { useTheme } from "../contexts/ThemeContext";
import { useSelector } from 'react-redux'
import iwlogo from '../images/icons/logo-icon-small.png'
// @ts-ignore
import { Helmet } from 'react-helmet-async'
import api from '../api/base';
// import defaultWatches from "../assets/defaultWatches.json";
import { Watch } from '../interfaces'
import { AxiosError } from "axios";

const cf = require('currency-formatter')

function Home() {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  const navigate = useNavigate();

  const [watches, setWatches] = useState<Watch[]>([]);

  useEffect(() => {
    async function getWatches() {
      try {
        const { data } = await api.get('/watches/new-releases')
        setWatches(data)
      } catch (error) {
    
        const err = error as AxiosError
      
        console.log(err.response?.data)
        console.log(err.response?.status)
        console.log(err.response?.headers)

        console.log("Failed to retrieve newest edition watches")
      }
    }
   

    getWatches()

  }, []) //[] is put as the second param so useEffect only runs once

return (
    
  <main className="homepage-wrapper">

   
    <h1 className={`page-title-center theme-text-${currentTheme}-3`}>"Revolutionizing the way you Shop for Watches"</h1>
  
  
    <div className="background-wrapper">
      <img src={watch} alt="watch" />
    </div>
    <h1 className={`page-title-center theme-text-${currentTheme}-3`}>Newest Additions</h1>

    {/*Newest addition listings*/}
    <div className={`home-products-panel theme-text-${currentTheme}-3`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
      >         
      <motion.div
        className={`home-product-card theme-bg-${currentTheme}`}
        onClick={() => {
        
        navigate(`products/${watches[0].id}`); console.log(`products/${watches[0].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[0]?.imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[0]?.name}</div>
        <div>Brand: {watches[0]?.brand}</div>
        <div>Price: {cf.format(watches[0]?.price, {code: 'USD'}) ?? ''}</div>
        
      </div>
      </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
      >         
        <motion.div
          className={`home-product-card theme-bg-${currentTheme}`}
          onClick={() => {
          
          navigate(`products/${watches[4]?.id}`); console.log(`products/${watches[4]?.id}`)
          }}
          whileHover={{ y: -10 }}
        >
        <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
          <img src={watches[4]?.imageUrl} alt="noimage" />
        </div>
        <div className={`home-product-card-text theme-border-${currentTheme}`}>
          <div>Name: {watches[4]?.name}</div>
          <div>Brand: {watches[4]?.brand}</div>
          <div>Price: {cf.format(watches[4]?.price, {code: 'USD'}) ?? ''}</div>
        </div>
        </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
      >         
      <motion.div
        className={`home-product-card theme-bg-${currentTheme}`}
        onClick={() => {
        
        navigate(`products/${watches[2]?.id}`); console.log(`products/${watches[2]?.id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[2]?.imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[2]?.name}</div>
        <div>Brand: {watches[2]?.brand}</div>
        <div>Price: {cf.format(watches[2]?.price, {code: 'USD'}) ?? ''}</div>
      </div>
      </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
      >         
      <motion.div
        className={`home-product-card theme-bg-${currentTheme}`}
        onClick={() => {
        
        navigate(`products/${watches[3]?.id}`); console.log(`products/${watches[3]?.id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[3]?.imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[3]?.name}</div>
        <div>Brand: {watches[3]?.brand}</div>
        <div>Price: {cf.format(watches[3]?.price, {code: 'USD'}) ?? ''}</div>
      </div>
      </motion.div>
    </motion.div>
  </div>
  
</main>



  )
}

export default Home