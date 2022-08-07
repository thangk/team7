// import { querystring } from '@firebase/util';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { camelCase } from './Utils'
import api from '../api/base'


//@ts-ignore
function ProductsFilterPanel({ products, setSearchResult }) {
  

  const getListItems = (key: string) => {
    // @ts-ignore
    return [...new Set(products.map((item: {key: any}) => item[key]))]
  }

  

  const products_filter_keyvalue_pair = [
    {
      key: 'Brand',
      value: getListItems('brand')
    },{
      key: 'Face Size',
      value: getListItems('faceSize')
    },{
      key: 'Case Colour',
      value: getListItems('caseColour')
    },{
      key: 'Band Colour',
      value: getListItems('bandColour')
    },{
      key: 'Movement Type',
      value: getListItems('movementType')
    },{
      key: 'Price',
      value: getListItems('price')
    }
  ]


  // const handleSearchChange = (e: any) => {
  //   if (!e.target.value) return setSearchResult(products)

  //   const resultArray = products.filter((product: any) => product.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
  //   product.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //   product.faceSize.toLowerCase().includes(e.target.value.toLowerCase()) || 
  //   product.caseColour.toLowerCase().includes(e.target.value.toLowerCase()) || 
  //   product.bandColour.toLowerCase().includes(e.target.value.toLowerCase()) || 
  //   product.movementType.toLowerCase().includes(e.target.value.toLowerCase())
  //   )

  //   setSearchResult(resultArray)
  // }

  const [ searchParam, setSearchParam ] = useSearchParams()

  const [ paramsArray, setParamsArray ] = useState([])

  const [ runQuery, setRunQuery ] = useState(false)


  


  const deleteFromParamsArray = (key: string, value: string) => {

    return paramsArray.map((item, index) => {

      
      if (Object.keys(item)[0] === key && item[key] === value) {
        paramsArray.splice(index, 1)

        setParamsArray([...paramsArray])
        
      }
      return paramsArray
    })

  }

  const addToParamsArray = (key: string, value: string) => {

    const tempArray = [...paramsArray]

    // @ts-ignore
    setParamsArray([...paramsArray, { [key]: value }])

    return [...tempArray, { [key]: value }]
  }


  const handleSearchChange = (e: any) => {

    const currentParam = e.target.value
    const isChecked = e.target.checked
    const filterType = camelCase(e.target.className)

    const params = new URLSearchParams();


    if (isChecked) {

      const udpatedParamsArray = addToParamsArray(filterType, currentParam)

      for (const item of udpatedParamsArray) {
        // @ts-ignore
        params.append(Object.keys(item)[0], item[Object.keys(item)[0]])
      }
      
      setSearchParam(params)

      // fetchQueriedFilter(searchParam.toString())
    }



    if (!isChecked) {

      const updatedParamsArray = deleteFromParamsArray(filterType, currentParam)

      if (paramsArray.length === 0) { 
        setSearchParam({})
        
      } else {

        for (const item of updatedParamsArray) {
          // @ts-ignore
          params.append(Object.keys(item)[0], item[Object.keys(item)[0]])
        }
        
        setSearchParam(params)
      }
      
    }

    
    setRunQuery(true)
  }

  useEffect(() => {

    const fetchQueriedFilter = async (querystring: any) => {
      try {
        const { data } = await api.get(`/watches?${querystring}`)
        setSearchResult(data)
      } catch {
        console.log('Query error')
      }
    }
    
    if (runQuery) { 
      fetchQueriedFilter(searchParam.toString())
      setRunQuery(false)
    }
    

  }, [runQuery, searchParam, setSearchResult])



  return (
    <>
      <input className="searchbox" id="searchbox" type="text" placeholder="Search" onChange={handleSearchChange} />

      {products_filter_keyvalue_pair.sort().map((item: any) => {
        return (
          <section className="filter-options-wrapper" key={item.key}>
            <h1>{item.key}</h1>
            <div className="filter-options">
              <form id={`filter-form-${item.key.toLowerCase()}`}>
                {item.value.sort().map((v: any) => {
                  return (
                    <div className="filter-option" key={v}>
                      <input type="checkbox" className={item.key} id={`${item.key.toLowerCase()}-${v}`} onChange={handleSearchChange} name={v} value={v} />
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
