import { format } from 'path'
import React, { useEffect, useState } from 'react'

//@ts-ignore
function ProductsFilterPanel({ products }) {

  const [keysValues, setKeysValues] = useState([])

  
  //@ts-ignore
  const unique = {
    brands: [...new Set(products.map((product: { brand: any }) => product.brand))],
    faceSizes: [...new Set(products.map((product: { faceSize: any }) => product.faceSize))],
    caseColours: [...new Set(products.map((product: { caseColour: any }) => product.caseColour))],
    bandColours: [...new Set(products.map((product: { bandColour: any }) => product.bandColour))],
    movementTypes: [...new Set(products.map((product: { movementType: any }) => product.movementType))],
    prices: [...new Set(products.map((product: { price: any }) => {
      return Number(product.price.replace(/[$]|,/gm, ''))
  }
    ))],
    
  }


  const getFilterTitle = (propName: any) => {
    switch (propName) {
      case 'brands': return 'Brand'
      case 'faceSizes': return 'Face Size'
      case 'caseColours': return 'Case Colour'
      case 'bandColours': return 'Band Colour'
      case 'movementTypes': return 'Movement Type'
      case 'prices': return 'Price Range'
    }
  }


  const dispalyValues = (values: any) => {

    return values.map((item: any) => {
      return (
        
            // <div className='filter-option' key={item}>
              // <input type='checkbox' id={item} name={item} />
              <label key={item} htmlFor={item}>{item}</label>
            // </div>
      )
    })
  }

  
 
  const keys_values: any = []

  const getKeysValues = () => {


    Object.entries(unique).forEach(([key, value]) => {
      

        const makePair = {
          key,
          value
        }

        keys_values.push(makePair)

        // return 
    })

  }

  

    getKeysValues()


  return (
    <>
    <input className="searchbox" type="text" placeholder='Search' />

          {keys_values.map((item: any) => {

            return (
            <section key={item.key}>
              <h1>{getFilterTitle(item.key)}</h1>
              <div className='filter-options'>

                <form id={`filter-form-${item.key.toLocaleLowerCase()}`}>

                 {item.value.map((v: any) => {

                  return (

                    <div className='filter-option' key={v}>
                      <input type='checkbox' id={`${item.key.toLocaleLowerCase()}-${v}`} name={v} />
                      <label htmlFor={`${item.key.toLocaleLowerCase()}-${v}`}>{v}</label>
                    </div>
                  )
                })} 
                 </form>


              </div>
            </section>
          )})}


             





  </>
  )
}

export default ProductsFilterPanel