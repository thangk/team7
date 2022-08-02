import React, { useEffect,  } from "react";

//@ts-ignore
function ProductsFilterPanel({ products, setSearchResult }) {
  //@ts-ignore
  const unique = {
    brands: [...new Set(products.map((product: { brand: any }) => product.brand))],
    faceSizes: [...new Set(products.map((product: { faceSize: any }) => product.faceSize))],
    caseColours: [...new Set(products.map((product: { caseColour: any }) => product.caseColour))],
    bandColours: [...new Set(products.map((product: { bandColour: any }) => product.bandColour))],
    movementTypes: [...new Set(products.map((product: { movementType: any }) => product.movementType))],
    prices: [
      ...new Set(
        products.map((product: { price: any }) => {
          return Number(product.price.replace(/[$]|,/gm, ""));
        })
      ),
    ],
  };

  const getFilterTitle = (propName: any) => {
    switch (propName) {
      case "brands":
        return "Brand";
      case "faceSizes":
        return "Face Size";
      case "caseColours":
        return "Case Colour";
      case "bandColours":
        return "Band Colour";
      case "movementTypes":
        return "Movement Type";
    }
  };

  const keys_values: any = [];

  const getKeysValues = () => {
    Object.entries(unique).forEach(([key, value]) => {
      const makePair = { key, value };

      keys_values.push(makePair);
    });
  };


  const handleSearchChange = (e: any) => {
    console.log(e.target.type)
    if (!e.target.value) return setSearchResult(products)

    console.log(e.target.checked)

    const resultArray = products.filter((product: any) => product.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
    product.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
    product.faceSize.toLowerCase().includes(e.target.value.toLowerCase()) || 
    product.caseColour.toLowerCase().includes(e.target.value.toLowerCase()) || 
    product.bandColour.toLowerCase().includes(e.target.value.toLowerCase()) || 
    product.movementType.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setSearchResult(resultArray)
  }

  // incomplete, filtering with multiple values is much more complicated than expected - Kap

  // const handleCheckboxChange = (e: any) => {
  //   // console.log(e.target.type)
  //   if (!e.target.checked) { 
  //     const removedItem = count.filter((item: string) => item.toLowerCase() !== e.target.value.toLowerCase())
  //     setCount(removedItem)
      
  //     return setSearchResult(products)
  //   }

  //   // @ts-ignore
  //   if (!count.includes(e.target.value)) setCount(pv => [...pv, e.target.value])

  //   let resultArray: any = []

  //   console.log(`size ${count.length}`)

  //   for (const i of count as string[]) {
  //     console.log(`i ${i}`)

  //     const oneResult = products.filter((product: any) => 
  //     product.name.toLowerCase().includes(i.toLowerCase()) || 
  //     product.brand.toLowerCase().includes(i.toLowerCase()) ||
  //     product.faceSize.toLowerCase().includes(i.toLowerCase()) || 
  //     product.caseColour.toLowerCase().includes(i.toLowerCase()) || 
  //     product.bandColour.toLowerCase().includes(i.toLowerCase()) || 
  //     product.movementType.toLowerCase().includes(i.toLowerCase())
  //     )

  //     resultArray.concat(oneResult)
  //     console.log(resultArray)
  //   }



  //   setSearchResult(resultArray)
  //   // console.log(resultArray)
  // }

  getKeysValues();

  
  useEffect(() => {
    // console.log(count)
    // console.log(`size: ${count.length}`)
    // console.log(searchResult)
  })


  return (
    <>
      <input className="searchbox" id="searchbox" type="text" placeholder="Search" onChange={handleSearchChange} />

      {keys_values.sort().map((item: any) => {
        return (
          <section className="filter-options-wrapper" key={item.key}>
            <h1>{getFilterTitle(item.key)}</h1>
            <div className="filter-options">
              <form id={`filter-form-${item.key.toLowerCase()}`}>
                {item.value.sort().map((v: any) => {
                  return (
                    <div className="filter-option" key={v}>
                      <input type="checkbox" id={`${item.key.toLowerCase()}-${v}`} onChange={handleSearchChange} name={v} value={v} />
                      <label htmlFor={`${item.key.toLowerCase()}-${v}`}>{v}</label>
                    </div>
                  );
                })}
              </form>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ProductsFilterPanel;
