import React from 'react'

import { motion } from 'framer-motion'
// import logo from '../images/icons/logo-icon.png'
// import account from '../images/icons/account-icon.png'
import logo2 from '../images/icons/logo2-icon.png'
import data from '../assets/template.json'
import noimage from '../images/icons/noimage.jpg'



function Products() {


  return (
    <>

      {/* Navbar */}
      <div className='header-wrapper'>

          <div className="header">
                  <input className="searchbox" type="text" placeholder='Search' />
                  <img src={logo2} alt='logo2' className='logo-image' />
                  <nav className="navbar">
                      <motion.a href='/#' 
                      className="links" 
                      onClick={() => alert("account page isn't made yet")} 
                      whileHover={{ y: -2 }}>Account</motion.a>
                      <motion.a href='/#' className="links" onClick={() => alert("cart page isn't made yet")} whileHover={{ y: -2 }} >Cart</motion.a>
                      <motion.a href='/#' className="links" onClick={() => alert("menu page isn't made yet")} whileHover={{ y: -2 }} >Menu</motion.a>
                  </nav>
          </div>
      </div>

      <main className='productspage-wrapper'>

        <h1 className='page-title'>Products</h1>

        <div 
        className='products-content-wrapper'
        >

          {/* filtering panel LEFT SIDE */}
          <section className='filter-panel' >
            <div className='placeholder-text'>filter panel</div>
            
          </section>

            {/* products listing RIGHT SIDE */}
            <section className='products-panel' >

              <div className='product-cards-wrapper'>

              {data.map((item, index) => {
                  return (
                  

                    <motion.div className='product-card' onClick={() => alert('product details page will be made soon')} key={item.price} whileHover={{ y: -10 }}>

                      <div className='product-card-image'>
                        <img src={noimage} alt='noimage' />
                      </div>

                      <div className='product-card-text'>
                        
                        <div>Name: {item.name}</div>
                        <div>Brand: {item.brand}</div>
                        <div>Price: {item.price}</div>
                        
                        

                      </div>
                    </motion.div>
                  
                  )

                })}

                </div>

            </section>

        </div>

        <section className='pagination-wrapper'>
          <div className='left-side'></div>
          <div className='product-cards-pagination'>
                <div className='placeholder-text'>1 2 3 4 5 6</div>
          </div>
        </section>


      </main>

    </>
  )
}

export default Products