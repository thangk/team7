import watch from "../images/icons/watch.jpg";
import React from 'react';
import data from "../assets/template.json";
import noimage from "../images/icons/noimage.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

function Home() {

const navigate = useNavigate();
return (
    
  <main className="homepage-wrapper">

    <h1 className="page-title-center">"Revolutionizing the way you Shop for Watches"</h1>
  
  
    <div className="background-wrapper">
      <img src={watch} alt="watch" />
    </div>
    <h1 className="page-title-center">Newest Additions</h1>

    {/*Newest addition listings*/}
    <section className="home-products-panel">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
        className="product-cards-wrapper"
      >         
      <motion.div
        className="product-card"
        onClick={() => {
        navigate(`/${data[0].id}`); console.log(`/${data[0].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className="product-card-image">
        <img src={noimage} alt="noimage" />
      </div>
      <div className="product-card-text">
        <div>Name: {data[0].name}</div>
        <div>Brand: {data[0].brand}</div>
        <div>Price: {data[0].price}</div>
        <div>ID: {data[0].id}</div>
      </div>
      </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
        className="product-cards-wrapper"
      >         
      <motion.div
        className="product-card"
        onClick={() => {
        navigate(`/${data[1].id}`); console.log(`/${data[1].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className="product-card-image">
        <img src={noimage} alt="noimage" />
      </div>
      <div className="product-card-text">
        <div>Name: {data[1].name}</div>
        <div>Brand: {data[1].brand}</div>
        <div>Price: {data[1].price}</div>
        <div>ID: {data[1].id}</div>
      </div>
      </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
        className="product-cards-wrapper"
      >         
      <motion.div
        className="product-card"
        onClick={() => {
        navigate(`/${data[2].id}`); console.log(`/${data[2].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className="product-card-image">
        <img src={noimage} alt="noimage" />
      </div>
      <div className="product-card-text">
        <div>Name: {data[2].name}</div>
        <div>Brand: {data[2].brand}</div>
        <div>Price: {data[2].price}</div>
        <div>ID: {data[2].id}</div>
      </div>
      </motion.div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={nanoid()}
        className="product-cards-wrapper"
      >         
      <motion.div
        className="product-card"
        onClick={() => {
        navigate(`/${data[3].id}`); console.log(`/${data[3].id}`)
        }}
        whileHover={{ y: -10 }}
      >
      <div className="product-card-image">
        <img src={noimage} alt="noimage" />
      </div>
      <div className="product-card-text">
        <div>Name: {data[3].name}</div>
        <div>Brand: {data[3].brand}</div>
        <div>Price: {data[3].price}</div>
        <div>ID: {data[3].id}</div>
      </div>
      </motion.div>
    </motion.div>
  </section>
</main>



  )
}

export default Home