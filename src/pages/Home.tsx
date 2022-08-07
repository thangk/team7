import watch from "../images/icons/watch.jpg";
import React from 'react';
import data from "../assets/template.json";
import noimage from "../images/icons/noimage.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
// import { useTheme } from "../contexts/ThemeContext";
import { useSelector } from 'react-redux'
import iwlogo from '../images/icons/logo-icon-small.png'

// @ts-ignore
import { Helmet } from 'react-helmet'

function Home() {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  console.log(window.location.href)

const navigate = useNavigate();
return (
    
  <main className="homepage-wrapper">

    <Helmet>
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
        navigate(`/${data[0].id}`); console.log(`/${data[0].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={noimage} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {data[0].name}</div>
        <div>Brand: {data[0].brand}</div>
        <div>Price: {data[0].price}</div>
        
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
        navigate(`/${data[1].id}`); console.log(`/${data[1].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={noimage} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {data[1].name}</div>
        <div>Brand: {data[1].brand}</div>
        <div>Price: {data[1].price}</div>
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
        navigate(`/${data[2].id}`); console.log(`/${data[2].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={noimage} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {data[2].name}</div>
        <div>Brand: {data[2].brand}</div>
        <div>Price: {data[2].price}</div>
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
        navigate(`/${data[3].id}`); console.log(`/${data[3].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className={`home-product-card-image theme-border-${currentTheme}-light`}>
        <img src={noimage} alt="noimage" />
      </div>
      <div className={`home-product-card-text theme-border-${currentTheme}`}>
        <div>Name: {data[3].name}</div>
        <div>Brand: {data[3].brand}</div>
        <div>Price: {data[3].price}</div>
      </div>
      </motion.div>
    </motion.div>
  </div>
  
</main>



  )
}

export default Home