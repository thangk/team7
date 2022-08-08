import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import data from "../assets/template.json";
import noimage from "../images/icons/noimage.jpg";
import api from '../api/base'
import { nanoid } from "nanoid";
import ProductsFilterPanel from "../components/ProductsFilterPanel";
import ProductsPagination from "../components/ProductsPagination";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
// @ts-ignore
import { Helmet } from 'react-helmet-async'
import iwlogo from '../images/icons/logo-icon-small.png'

const cf = require('currency-formatter')

const SCREEN_SM = 640;

function Products() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const navigate = useNavigate();

  // const { currentTheme } = useTheme()
  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  const screenSize = window.innerWidth;

  const getDisplayRangeNMarginPages = () => {
    if (screenSize < SCREEN_SM) return { displayRange: 2, marginPages: 1, itemsPerPage: 4 };

    return { displayRange: 4, marginPages: 2, itemsPerPage: 12 };
  };

  const productsPerPage = getDisplayRangeNMarginPages().itemsPerPage;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = searchResult.slice(pagesVisited, pagesVisited + productsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/watches')
        setProducts(data)
        setSearchResult(data)
      } catch {
        console.log('Fetch failed.')
      }
    }
    fetchProducts()

  }, [])

  

  return (
    <>
      <motion.main 
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className={`productspage-wrapper theme-text-${currentTheme}-1`}>

        <Helmet prioritizeSeoTags>
          {/* Primary Meta Tags */}
          <meta name="title" content="Products" />
          <meta name="description" content="List of Infinity Watches" />
          
          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content="Products" />
          <meta property="og:description" content="List of Infinity Watches" />
          <meta property="og:image" content={iwlogo} />
          
          {/* Twitter Meta Tags */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={window.location.href} />
          <meta property="twitter:title" content="Products" />
          <meta property="twitter:description" content="List of Infinity Watches" />
          <meta property="twitter:image" content={iwlogo} />
        </Helmet>

        <h1 className="page-title">Products</h1>

        <div className="products-content-wrapper">
          {/* filtering panel LEFT SIDE */}         
            <ProductsFilterPanel products={products} setSearchResult={setSearchResult} />

          {/* products listing RIGHT SIDE */}
          <section className={`products-panel theme-border-${currentTheme}-light`}>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              
              key={nanoid()}
              className="product-cards-wrapper"
            >
              {displayProducts.length === 0 ? <h1 className="prodcutspage__nomatchingresult_text">No matching results</h1> :
              
              displayProducts.map((item, index) => {
                return (
                  <motion.div
                  layout
                    className={`product-card theme-bg-${currentTheme} hover-theme-bg-${currentTheme}-dark`}
                    onClick={() => {
                      // @ts-ignore
                      navigate(`/products/${item.id}`);
                      // @ts-ignore
                      console.log(item.id)
                    }}
                    key={index}
                    whileHover={{ y: -10 }}
                  >
                    <div className={`product-card-image theme-border-${currentTheme}-light`}>
                      {/* @ts-ignore */}
                      <img src={item.imageUrl ? item.imageUrl: item.imageUpload ? item.imageUpload : noimage} alt="noimage" />
                      {/* @ts-ignore */}
                      {/* <img src={item.imageUrl} alt="noimage" /> */}
                    </div>

                    <div className="product-card-text">
                      {/* @ts-ignore */}
                      <div>Name: {item.name ?? ''}</div>
                      {/* @ts-ignore */}
                      <div>Brand: {item.brand ?? ''}</div>
                      {/* @ts-ignore */}
                      <div>Face Size: {item.faceSize ?? ''}</div>
                      {/* @ts-ignore */}
                      <div>Price: {cf.format(item.price, {code: 'USD'}) ?? ''}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </div>

        <ProductsPagination
          products={products}
          productsPerPage={productsPerPage}
          setPageNumber={setPageNumber}
          getDisplayRangeNMarginPages={getDisplayRangeNMarginPages}
        />
      </motion.main>
    </>
  );
}

export default Products;
