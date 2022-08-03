import { motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "../customHooks/useDimension";
import { MenuList, MenuToggle } from "./HeaderMenu";
import logo from "../images/icons/logo-icon-small.png";
import { Link, useNavigate } from "react-router-dom";
import { headerNavLinks, themeIcons } from "./Constants";
import { HeaderSpacer } from "./Utils";
import Footer from "./Footer";
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from "../features/themeSlice";

// @ts-ignore
const Header = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [tooltip, setTooltip] = useState("");
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const navigate = useNavigate();


  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  const dispatch = useDispatch()

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

    const handleSetTheme = (newTheme: string) => {
      dispatch(setTheme(newTheme))
    }

    useEffect(() => {
      // console.log(`initial val of currentTheme: ${currentTheme}`)
    }, [])


  return (
    <>
    <div className={`theme-bg-${currentTheme}`}>
      {/* Navbar */}
      <div className={`header-wrapper theme-bg-${currentTheme}`}>
      <div className="fixed w-full h-fit drop-shadow-lg z-50">



      </div>

        <div className={`header theme-bg-${currentTheme}`}>

          {/* display theme icons */}
          <nav className="desktop-theme-picker">
            {themeIcons.map(item => {
              return (
              <motion.a className="links" key={item.name} id={item.name} onMouseOver={showTooltip} onMouseOut={hideTooltip} onClick={() => handleSetTheme(item.name)} whileHover={{ y: -2 }}>
              <div className={`tooltip theme-bg-${currentTheme}-darker theme-text-${currentTheme}-2`}>
                  {tooltip}
                </div>
                {item.icon}
              </motion.a>
              )
            })}
          </nav>

            {/* website logo */}
          <img src={logo} alt="logo" className="logo-image" onClick={() => navigate('/', {replace: true})} />

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
                        <MenuToggle currentTheme={currentTheme} toggle={() => toggleOpen()} />
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
                  <Link to={item.url}>{item.icon}</Link>
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
    </>

    
  );
};

export default Header;
