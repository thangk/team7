import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
// import noimage from '../images/icons/noimage.jpg'

function Products_DetailsPage() {

  const { currentTheme } = useTheme()

  return (
    
    <>
        <div className={`about-wrapper theme-border-${currentTheme}`}>
            <h1 className='page-title '>About</h1>
        </div>
    </>
  )
}

export default Products_DetailsPage