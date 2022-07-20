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
import { MenuToggle } from '../components/MenuToggle'
import { useDimensions } from '../customHooks/useDimension'
import { MenuList } from '../components/MenuList'



const SCREEN_SM = 640;
// const SCREEN_MD = 768;
// const SCREEN_LG = 1024;
// const SCREEN_XL = 1280;
// const SCREEN_2XL = 1536;


const sidebar = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      scale: 0
    }
  }
};

function Products() {

  const [products] = useState(data)
  const [pageNumber, setPageNumber] = useState(0)
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  
  const screenSize = window.innerWidth;

  
  const getDisplayRangeNMarginPages = () => {

    if (screenSize < SCREEN_SM) return {displayRange: 2, marginPages: 1, itemsPerPage: 4 }
    
    return {displayRange: 4, marginPages: 2, itemsPerPage: 6 }
  };

  const productsPerPage = getDisplayRangeNMarginPages().itemsPerPage

  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);
  const pageCount = (Math.ceil(products.length / productsPerPage))


  // @ts-ignore
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // useEffect(() => {
  //   console.log('a render occured')
  // }, []);

  return (
    <>

      {/* Navbar */}
      <div className='header-wrapper'>

          <div className="header">
                  <nav className="navbar socials">
                    <motion.a className='links' onClick={() => alert('facebook link will go here')} whileHover={{ y: -2 }}>
                      <FaFacebookSquare />
                    </motion.a>

                    <motion.a className='links' onClick={() => alert('instagram link will go here')} whileHover={{ y: -2 }}>
                      <FaInstagramSquare />
                    </motion.a>

                    <motion.a className='links' onClick={() => alert('twitter link will go here')} whileHover={{ y: -2 }}>
                      <FaTwitterSquare />
                    </motion.a>
                  </nav>


                  <img src={logo2} alt='logo2' className='logo-image' />


                  <nav className="navbar">
                      <motion.a className="links" onClick={() => alert("account page isn't made yet")} whileHover={{ y: -2 }}><AiOutlineUser /></motion.a>
                      <motion.a className="links" onClick={() => alert("cart page isn't made yet")} whileHover={{ y: -2 }} ><AiFillShopping /></motion.a>

                      {/* <motion.a className="links" onClick={() => alert("menu page isn't made yet")} whileHover={{ y: -2 }} ><AiOutlineMenu /></motion.a> */}

                      <div className='links menu-wrapper-spot'>
                      <motion.div
                        initial={false}
                        animate={isOpen ? 'open' : 'closed'}
                        custom={height}
                        ref={containerRef}
                        className={`menu-wrapper menubg-${isOpen}`}
                      >
                        <motion.div className='menu-bg' variants={sidebar}>
                          <MenuToggle toggle={() => toggleOpen()} />
                          <MenuList />
                        </motion.div>
                      
                      </motion.div>
                      </div>

                  </nav>
          </div>
      </div>

      <main className='productspage-wrapper'>

        <h1 className='page-title'>Products</h1>

        <div className='products-content-wrapper'>

          {/* filtering panel LEFT SIDE */}
          <section className='filter-panel' >
            <ProductsFilterPanel products={products} />
            
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
                  previousLabel={<AiOutlineCaretLeft />}
                  nextLabel={<AiOutlineCaretRight />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationButtonsContainer'}
                  pageClassName={'paginationButtons'}
                  previousClassName={'backButton'}
                  nextClassName={'nextButton'}
                  disabledClassName={'paginationDisabledButton'}
                  activeClassName={'paginationActiveButton'}
                  breakLabel={'...'}
                  breakClassName={'breakLabel'}
                  pageRangeDisplayed={getDisplayRangeNMarginPages().displayRange}
                  marginPagesDisplayed={getDisplayRangeNMarginPages().marginPages}
                />
          </div>
        </section>


      </main>

    </>
  )
}

export default Products