import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { adminNavLinks } from './Constants'

const xValue = window.innerWidth < 640 ? 50 : 0;
const yValue = window.innerWidth < 640 ? 0 : 50;

// a type of animation motion set
const variant1 = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: xValue,
    y: yValue,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// a type of animation motion set
const variant2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// list of items in the menu
// const menuItems = [
//   {
//     icon: <MdDashboard />,
//     text: "Community",
//     url: '/admin/dashboard'
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     text: "Find a store",
//   },
//   {
//     icon: <FaRegNewspaper />,
//     text: "Newsletter",
//   },
//   {
//     icon: <FaInfo />,
//     text: "About Us",
//   },
//   {
//     icon: <FaPhoneAlt />,
//     text: "Contact",
//   },
// ];

// @ts-ignore
export const MenuItemAdmin = ({ i }) => {

    const navigate = useNavigate()

  return (
    <motion.li
      className="admin__menu-li"
      variants={variant1}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`${adminNavLinks[i].url}`)}
    >
      <div className="admin__icon-placeholder">{adminNavLinks[i].icon}</div>
      <div className="admin__text-placeholder">{adminNavLinks[i].name}</div>
    </motion.li>
  );
};

// from Framer Motion's examples list
// @ts-ignore
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#94a3b8"
    whileHover={{ stroke: "#64748b" }}
    strokeLinecap="round"
    {...props}
  />
);

// from Framer Motion's examples list
// @ts-ignore
export const MenuToggleAdmin = ({ toggle }) => (
  <motion.button className="admin__menubtn" onClick={toggle} whileHover={{ y: -2 }}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);

const itemIds = [0, 1, 2, 3, 4, 5];

// @ts-ignore
export const MenuListAdmin = ({ isOpen }) => (
  <motion.ul className={`admin__menu-ul menu-${isOpen}-ul-zindex`} variants={variant2}>
    {itemIds.map((i) => (
      <MenuItemAdmin i={i} key={i} />
    ))}
  </motion.ul>
);
