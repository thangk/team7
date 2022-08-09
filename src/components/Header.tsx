import { motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "../customHooks/useDimension";
import { MenuList, MenuToggle } from "./HeaderMenu";
import { Link, useNavigate } from "react-router-dom";
import { headerNavLinks, themeIcons } from "./Constants";
import { HeaderSpacer } from "./Utils";
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from "../features/themeSlice";
import { setErrorImages } from "../features/errorImagesSlice";
import logo from "../images/icons/logo-icon-small.png";
import Footer from "./Footer";
import HeaderCart from "./HeaderCart";



// @ts-ignore
const Header = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [tooltip, setTooltip] = useState("");
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const navigate = useNavigate();

  const dispatch = useDispatch()

  // @ts-ignore
  const cartItemsCount = useSelector(state => state.cart.numOfItems)

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  //@ts-ignore
  const showTooltip = (e) => {

    setTooltip(e.currentTarget.id);

    const childNodes = e.currentTarget.childNodes;

    for (const child of childNodes) {
      if (child.classList.contains('tooltip')) {
        child.classList.add('show-tooltip');
      }
    }
  }

    //@ts-ignore
    const hideTooltip = (e) => {

      setTooltip(e.currentTarget.id);
  
      const childNodes = e.currentTarget.childNodes;
  
      for (const child of childNodes) {
        if (child.classList.contains('tooltip')) {
          child.classList.remove('show-tooltip');
        }
      }
    }

    // @ts-ignore
    const handleSetTheme = (newTheme: string, e) => {
      dispatch(setTheme(newTheme))
    }


    useEffect(() => {

      // import error images into an array and store it in a redux context for use in other components efficiently
      const errorImages = []

      for (let i = 1; i < 9; i++) {
        errorImages.push(require(`../images/error_images/ei${i}.jpg`))
      }

      dispatch(setErrorImages(errorImages))


    }, [dispatch, isOpen, cartItemsCount])


  return (

    // The super root div
    <div className={`flex flex-col theme-bg-${currentTheme} w-full min-h-screen `}>



      {/* Navbar */}
      <div className={`header-wrapper theme-bg-${currentTheme}`}>
      <div className="fixed w-full h-fit drop-shadow-lg z-50">



      </div>

        <div className={`header theme-bg-${currentTheme}`}>

          {/* display theme icons */}
          <nav className="desktop-theme-picker">
            {themeIcons.map(item => {
              return (
              <motion.a className="links" key={item.name} id={item.name} onMouseOver={showTooltip} onMouseOut={hideTooltip} onClick={(e) => handleSetTheme(item.name, e)} whileHover={{ y: -2 }}>
              <div className={`tooltip theme-bg-${currentTheme}-darker theme-text-${currentTheme}-2`}>
                  {tooltip}
                </div>
                {item.icon}
              </motion.a>
              )
            })}
          </nav>

            {/* website logo */}
          <motion.img src={logo} alt="logo" className="logo-image" onClick={() => navigate('/', {replace: true})} 
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}
          />

            {/* display nav links */}
          <nav className="navbar">
            {headerNavLinks.map(item => {

              // if it's the menu button, display it
              if (item.name === 'menu') {
                return (
                  <div className={`links theme-text-${currentTheme}-1 menu-wrapper-spot`} key={item.name} id="menu" onMouseOver={showTooltip} onMouseOut={hideTooltip}>

                  <div className={`tooltip theme-bg-${currentTheme}-darker theme-text-${currentTheme}-2`}>
                      {tooltip}
                    </div>
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      custom={height}
                      ref={containerRef}
                      className="menu-wrapper"
                      id='dropdown-menu'
                    >
                      
                      <div className="menu-bg">
                        <MenuToggle currentTheme={currentTheme} toggle={toggleOpen} />
                        {isOpen && <MenuList themeIcons={themeIcons} handleSetTheme={handleSetTheme} isOpen={isOpen} />}
                      </div>
                    </motion.div>
                  </div>
                )
              }

              // if not, then display the nav links
              return (
              <motion.div className={`links theme-text-${currentTheme}-1`} key={item.name} id={item.name} onMouseOver={showTooltip} onMouseOut={hideTooltip} whileHover={{ y: -2 }}>
                  <div className={`tooltip theme-bg-${currentTheme}-darker theme-text-${currentTheme}-2`}>
                    {tooltip}
                  </div>
                  <div className="header__cartItemsCount_wrapper">
                    {item.name === 'cart' && cartItemsCount > 0 ? 
                    <HeaderCart /> : ''}
                    
                    <Link to={item.url}>{item.icon}</Link>
                  </div>
                </motion.div>
              )
            })}



          </nav>
        </div>
      </div>

      <HeaderSpacer />
      {children}

      <Footer />
      </div>

    
  );
};

export default Header;
