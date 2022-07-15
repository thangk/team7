import React from 'react'

import logo from '../images/icons/logo-icon.png'
import account from '../images/icons/account-icon.png'
import logo2 from '../images/icons/logo2-icon.png'

function Products() {
  return (
    <>
      {/* <h1 className='top-title'>Welcome to Team 7's Products page</h1>
      <h3 className='bg-red-400 text-4xl'>A subtitle text</h3> */}

<div className='header-wrapper'>

    <div className="header">
            <input className="searchbox" type="text" placeholder='Search' />
            {/* <h1 className="brand-logo">The Watchmen</h1> */}
            <img src={logo2} alt='logo2' className='logo-image' />
            <nav className="navbar">
                <a href="/#" className="links">Account</a>
                <a href="/#" className="links">Cart</a>
                <a href="/#" className="links">Menu</a>
            </nav>
    </div>
</div>

    
    <div className="container">
        <div className="img-container">
            
            <img src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt='img1'/>
        </div>

        <div className="img-container">
            <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt='img2' />

        </div>
        <div className="img-container">

            <img src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80" alt='img3' />
        </div>
        <div className="img-container">

            <img src="https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt='img4' />
        </div>
        <div className="img-container">

            <img src="https://images.unsplash.com/photo-1556597130-ef7aa3c71ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt='img5' />
        </div>
        <div className="img-container">

            <img src="https://images.unsplash.com/photo-1624978983107-3082b6b0fb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80" alt='img6' />
        </div>
    </div>
    </>
  )
}

export default Products