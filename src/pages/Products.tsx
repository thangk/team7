import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../assets/template.json";
import noimage from "../images/icons/noimage.jpg";
// import axios from 'axios'
import { nanoid } from "nanoid";
import ProductsFilterPanel from "../components/ProductsFilterPanel";
import ProductsPagination from "../components/ProductsPagination";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const SCREEN_SM = 640;

function Products() {
  const [products] = useState(data);
  const [searchResult, setSearchResult] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);

  const navigate = useNavigate();

  // const { currentTheme } = useTheme()
  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  const screenSize = window.innerWidth;

  const getDisplayRangeNMarginPages = () => {
    if (screenSize < SCREEN_SM) return { displayRange: 2, marginPages: 1, itemsPerPage: 4 };

    return { displayRange: 4, marginPages: 2, itemsPerPage: 6 };
  };

  const productsPerPage = getDisplayRangeNMarginPages().itemsPerPage;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = searchResult.slice(pagesVisited, pagesVisited + productsPerPage);

  // useEffect(() => {
  //   console.log(searchResult)
  // }, [searchResult])

  return (
    <>
      <motion.main 
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className={`productspage-wrapper theme-text-${currentTheme}-1`}>
        <h1 className="page-title">Products</h1>

        <div className="products-content-wrapper">
          {/* filtering panel LEFT SIDE */}
          <section className={`filter-panel theme-border-${currentTheme}-light`}>
            <ProductsFilterPanel products={products} setSearchResult={setSearchResult} />
          </section>

          {/* products listing RIGHT SIDE */}
          <section className={`products-panel theme-border-${currentTheme}-light`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={nanoid()}
              className="product-cards-wrapper"
            >
              {displayProducts.map((item, index) => {
                return (
                  <motion.div
                    className={`product-card theme-bg-${currentTheme} hover-theme-bg-${currentTheme}-dark`}
                    onClick={() => {
                      navigate(`/products/${item.id}`); console.log(`/${item.id}`)
                    }}
                    key={index}
                    whileHover={{ y: -10 }}
                  >
                    <div className={`product-card-image theme-border-${currentTheme}-light`}>
                      <img src={noimage} alt="noimage" />
                    </div>

                    <div className="product-card-text">
                      <div>Name: {item.name}</div>
                      <div>Brand: {item.brand}</div>
                      <div>Price: {item.price}</div>
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
