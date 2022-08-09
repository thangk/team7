// import { querystring } from '@firebase/util';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { camelCase } from './Utils'
import api from '../api/base'
import { useSelector } from 'react-redux'
import { productsFilterKeyValues } from '../components/Constants'


//@ts-ignore
function ProductsFilterPanel({ products, setSearchResult }) {
  
  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

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
    const filterType = e.target.classList[0]

    const params = new URLSearchParams();


    if (isChecked) {

      const updatedParamsArray = addToParamsArray(filterType, currentParam)

      // console.log(updatedParamsArray)

      for (const item of updatedParamsArray) {
        // @ts-ignore
        params.append(Object.keys(item)[0], item[Object.keys(item)[0]])
      }
      
      setSearchParam(params)

    }



    if (!isChecked) {

      const updatedParamsArray = deleteFromParamsArray(filterType, currentParam)

      // console.log(updatedParamsArray)

      if (paramsArray.length === 0) { 
        setSearchParam({})
        
      } else {

        for (const item of updatedParamsArray) {

          // console.log(Object.keys(item)[0])
          // @ts-ignore
          // console.log(item[Object.keys(item)[0]])

          if (item) {

            // @ts-ignore
            params.append(Object.keys(item)[0], item[Object.keys(item)[0]])
          }

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
    <div className={`filterpanel__wrapper theme-border-${currentTheme}-light`}>
      <div className='filterpanel__content_wrapper'>      
      <input id="searchbox" type="text" placeholder="Search" onChange={handleSearchChange} />

      {productsFilterKeyValues.sort().map((item: any) => {
        return (
          <section className="filter-options-wrapper" key={item.key}>
            <h1>{item.key}</h1>
            <div className="filter-options">
              <form id={`filter-form-${item.key.toLowerCase()}`}>
                {item.values.sort().map((v: any) => {
                  return (
                    <div className="filter-option" key={v}>
                      <input type="checkbox" className={`${camelCase(item.key)} theme-text-${currentTheme}-3 theme-border-${currentTheme}-dark theme-focus-ring-${currentTheme}-1`} id={`${item.key.toLowerCase()}-${v}`} onChange={handleSearchChange} name={v} value={v} />
                      <label htmlFor={`${item.key.toLowerCase()}-${v}`}>{v}</label>
                    </div>
                  );
                })}
              </form>
            </div>
          </section>
        );
      })}
      </div>

    </div>
  );
}

export default ProductsFilterPanel;
