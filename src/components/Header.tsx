import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { AiFillShopping, AiOutlineUser } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useDimensions } from "../customHooks/useDimension";
import { MenuList, MenuToggle } from "./HeaderMenu";
import logo2 from "../images/icons/logo2-icon.png";
import { useNavigate } from "react-router-dom";

const sidebar = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      scale: 0,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="header-wrapper">
        <div className="header">
          <nav className="navbar socials">
            <motion.a className="links" onClick={() => alert("facebook link will go here")} whileHover={{ y: -2 }}>
              <FaFacebookSquare />
            </motion.a>

            <motion.a className="links" onClick={() => alert("instagram link will go here")} whileHover={{ y: -2 }}>
              <FaInstagramSquare />
            </motion.a>

            <motion.a className="links" onClick={() => alert("twitter link will go here")} whileHover={{ y: -2 }}>
              <FaTwitterSquare />
            </motion.a>
          </nav>

          <img src={logo2} alt="logo2" className="logo-image" onClick={() => navigate('/', {replace: true})} />

          <nav className="navbar">
            <motion.a className="links" onClick={() => alert("account page isn't made yet")} whileHover={{ y: -2 }}>
              <AiOutlineUser />
            </motion.a>
            <motion.a className="links" onClick={() => alert("cart page isn't made yet")} whileHover={{ y: -2 }}>
              <AiFillShopping />
            </motion.a>

            <div className="links menu-wrapper-spot">
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={`menu-wrapper menubg-${isOpen}`}
              >
                <motion.div className="menu-bg" variants={sidebar}>
                  <MenuToggle toggle={() => toggleOpen()} />
                  <MenuList />
                </motion.div>
              </motion.div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
