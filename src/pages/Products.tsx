import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../assets/template.json";
import noimage from "../images/icons/noimage.jpg";
// import axios from 'axios'
import { nanoid } from "nanoid";
import ProductsFilterPanel from "../components/ProductsFilterPanel";
import ProductsPagination from "../components/ProductsPagination";

const SCREEN_SM = 640;
// const SCREEN_MD = 768;
// const SCREEN_LG = 1024;
// const SCREEN_XL = 1280;
// const SCREEN_2XL = 1536;

function Products() {
  const [products] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);

  const screenSize = window.innerWidth;

  const getDisplayRangeNMarginPages = () => {
    if (screenSize < SCREEN_SM) return { displayRange: 2, marginPages: 1, itemsPerPage: 4 };

    return { displayRange: 4, marginPages: 2, itemsPerPage: 6 };
  };

  const productsPerPage = getDisplayRangeNMarginPages().itemsPerPage;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);

  return (
    <>
      <main className="productspage-wrapper">
        <h1 className="page-title">Products</h1>

        <div className="products-content-wrapper">
          {/* filtering panel LEFT SIDE */}
          <section className="filter-panel">
            <ProductsFilterPanel products={products} />
          </section>

          {/* products listing RIGHT SIDE */}
          <section className="products-panel">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={nanoid()}
              className="product-cards-wrapper"
            >
              {displayProducts.map((item, index) => {
                return (
                  <motion.div
                    className="product-card"
                    onClick={() => alert(`Product ID: ${item.id}. Details coming soon.`)}
                    key={index}
                    whileHover={{ y: -10 }}
                  >
                    <div className="product-card-image">
                      <img src={noimage} alt="noimage" />
                    </div>

                    <div className="product-card-text">
                      <div>Name: {item.name}</div>
                      <div>Brand: {item.brand}</div>
                      <div>Price: {item.price}</div>
                      <div>ID: {item.id}</div>
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
      </main>
    </>
  );
}

export default Products;
