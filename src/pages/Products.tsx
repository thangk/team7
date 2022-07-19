import React, { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
// import logo from '../images/icons/logo-icon.png'
// import account from '../images/icons/account-icon.png'
import logo2 from '../images/icons/logo2-icon.png'
import data from '../assets/template.json'
import noimage from '../images/icons/noimage.jpg'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { fadeInOut } from '../components/FramerMotions'
import { nanoid } from 'nanoid'


function Products() {

  const [products, setProducts] = useState(data)
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 6


  // useEffect(() => {
    // const fetchProducts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('../assets/template.json')
    //   setProducts(res.data)
    //   setLoading(false)
    // }

    // fetchProducts()

  //   console.log(products)
  // }, [pageNumber])

  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);
  const pageCount = (Math.ceil(products.length / productsPerPage))


  // @ts-ignore
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

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

        <div className='products-content-wrapper'>

          {/* filtering panel LEFT SIDE */}
          <section className='filter-panel' >
            <div className='placeholder-text'>filter panel</div>
            
          </section>

            {/* products listing RIGHT SIDE */}
            <section
             className='products-panel' >

              <motion.div  
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              key={nanoid()}
              className='product-cards-wrapper'>

              {displayProducts.map((item, index) => {
                  return (
                  

                    <motion.div 
                    className='product-card' onClick={() => alert('product details page will be made soon')} key={index} whileHover={{ y: -10 }}>

                      <div className='product-card-image'>
                        <img src={noimage} alt='noimage' />
                      </div>

                      <div className='product-card-text'>
                        
                        <div>Name: {item.name}</div>
                        <div>Brand: {item.brand}</div>
                        <div>Price: {item.price}</div>
                        <div>ID: {item.id}</div>
                        

                      </div>
                    </motion.div>
                  
                  )

                })}

                </motion.div>
            </section>

        </div>

        <section className='pagination-wrapper'>
          <div className='left-side'></div>
          <div className='product-cards-pagination'>
                <ReactPaginate
                  previousLabel={'Back'}
                  nextLabel={'Next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationButtonsContainer'}
                  pageClassName={'paginationButtons'}
                  previousLinkClassName={'backButton'}
                  nextLinkClassName={'nextButton'}
                  disabledLinkClassName={'paginationDisabledButton'}
                  activeClassName={'paginationActiveButton'}
                  breakLabel={'|'}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={2}
                />
          </div>
        </section>


      </main>

    </>
  )
}

export default Products