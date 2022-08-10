import watch from "../images/icons/watch.jpg";
import React, { useEffect, useState } from 'react';
import noimage from "../images/icons/noimage.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
// import { useTheme } from "../contexts/ThemeContext";
import { useSelector } from 'react-redux'
import iwlogo from '../images/icons/logo-icon-small.png'
// @ts-ignore
import { Helmet } from 'react-helmet-async'
import api from '../api/base';
import defaultWatches from "../assets/defaultWatches.json";

function Home() {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  const navigate = useNavigate();

  //@ts-ignore
  const [watches, setWatches] = useState(defaultWatches);

  useEffect(() => {
    async function getWatches() {
      try {
        const {data} = await api.get('/watches/new-releases')
        setWatches(data)
      } catch {
        console.log("Failed to retrieve newest edition watches")
      }
    }

    getWatches()

  }, []) //[] is put as the second param so useEffect only runs once

return (
    
  <main className="homepage-wrapper">

    {/* added by Kap */}
    <Helmet prioritizeSeoTags>
      {/* Primary Meta Tags */}
      <meta name="title" content="Infinity Watches" />
      <meta name="description" content="Premium & Affordable" />
      
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content="Infinity Watches" />
      <meta property="og:description" content="Premium & Affordable" />
      <meta property="og:image" content={iwlogo} />
      
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content="Infinity Watches" />
      <meta property="twitter:description" content="Premium & Affordable" />
      <meta property="twitter:image" content={iwlogo} />
    </Helmet>


    <h1 className={`page-title-center theme-text-${currentTheme}-1`}>"Revolutionizing the way you Shop for Watches"</h1>
  
  
    <div className="background-wrapper">
      <img src={watch} alt="watch" />
    </div>
    <h1 className={`page-title-center theme-text-${currentTheme}-1`}>Newest Additions</h1>

    {/*Newest addition listings*/}
    <div className={`home-products-panel theme-text-${currentTheme}-1`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
      >         
      <motion.div
        className={`home-product-card theme-bg-${currentTheme}`}
        onClick={() => {
        {/*@ts-ignore*/}
        navigate(`products/${watches[0].id}`); console.log(`products/${watches[0].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[0].imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[0].name}</div>
        <div>Brand: {watches[0].brand}</div>
        <div>Price: {watches[0].price}</div>
        
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
        {/*@ts-ignore*/}
        navigate(`products/${watches[1].id}`); console.log(`products/${watches[1].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[1].imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[1].name}</div>
        <div>Brand: {watches[1].brand}</div>
        <div>Price: {watches[1].price}</div>
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
        {/*@ts-ignore*/}
        navigate(`products/${watches[2].id}`); console.log(`products/${watches[2].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[2].imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[2].name}</div>
        <div>Brand: {watches[2].brand}</div>
        <div>Price: {watches[2].price}</div>
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
        {/*@ts-ignore*/}
        navigate(`products/${watches[3].id}`); console.log(`products/${watches[3].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={watches[3].imageUrl} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {watches[3].name}</div>
        <div>Brand: {watches[3].brand}</div>
        <div>Price: {watches[3].price}</div>
      </div>
      </motion.div>
    </motion.div>
  </div>
  
</main>



  )
}

export default Home