import { motion, useCycle } from "framer-motion";
import { useRef, useState } from "react";
import { AiFillShopping, AiOutlineUser } from "react-icons/ai";
import { BsGrid1X2Fill } from 'react-icons/bs'
import { useDimensions } from "../customHooks/useDimension";
import { MenuList, MenuToggle } from "./HeaderMenu";
import logo2 from "../images/icons/logo2-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { headerNavLinks, headerSocialIcons } from "./Constants";


const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [tooltip, setTooltip] = useState("");
  const containerRef = useRef(null);
  // const link = useRef(null);
  const { height } = useDimensions(containerRef);

  const navigate = useNavigate();

  //@ts-ignore
  const showTooltip = (e) => {

    setTooltip(e.currentTarget.id);

    const childNodes = e.currentTarget.childNodes;

    for (const child of childNodes) {
      if (child.classList.contains('tooltip')) {
        child.classList.toggle('show-tooltip');
      }
    }
  }



  return (
    <>
      {/* Navbar */}
      <div className="header-wrapper">
      <div className="fixed w-full h-fit theme-bg drop-shadow-lg z-50">



      </div>

        <div className="header">

          {/* display social links */}
          <nav className="navbar socials">
            {headerSocialIcons.map(item => {
              return (
              <motion.a className="links" key={item.name} id={item.name} onMouseOver={showTooltip} onMouseOut={showTooltip} onClick={() => alert(`${item.name} link will go here`)} whileHover={{ y: -2 }}>
              <div className="tooltip">
                  {tooltip}
                </div>
                {item.icon}
              </motion.a>
              )
            })}
          </nav>

            {/* website logo */}
          <img src={logo2} alt="logo2" className="logo-image" onClick={() => navigate('/', {replace: true})} />

            {/* display nav links */}
          <nav className="navbar">
            {headerNavLinks.map(item => {

              // if it's the menu button, display it
              if (item.name === 'menu') {
                return (
                  <div className="links menu-wrapper-spot" key={item.name} id="menu" onMouseOver={showTooltip} onMouseOut={showTooltip}>

                  <div className="tooltip">
                      {tooltip}
                    </div>
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      custom={height}
                      ref={containerRef}
                      className="menu-wrapper"
                    >
                      
                      <div className="menu-bg">
                        <MenuToggle toggle={() => toggleOpen()} />
                        {isOpen && <MenuList isOpen={isOpen} />}
                      </div>
                    </motion.div>
                  </div>
                )
              }

              // if not, then display the nav links
              return (
              <motion.div className="links" key={item.name} id={item.name} onMouseOver={showTooltip} onMouseOut={showTooltip} whileHover={{ y: -2 }}>
                  <div className="tooltip">
                    {tooltip}
                  </div>
                  <Link to={item.url}>{item.icon}</Link>
                </motion.div>
              )
            })}



          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
