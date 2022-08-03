import { motion } from "framer-motion";
import { FaInfo, FaMapMarkerAlt, FaPhoneAlt, FaRegNewspaper, FaUsers } from "react-icons/fa";

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
// const variant2 = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

// list of items in the menu
const menuItems = [
  {
    icon: <FaUsers />,
    text: "Community",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Find a store",
  },
  {
    icon: <FaRegNewspaper />,
    text: "Newsletter",
  },
  {
    icon: <FaInfo />,
    text: "About Us",
  },
  {
    icon: <FaPhoneAlt />,
    text: "Contact",
  },
];

// @ts-ignore
export const MenuItem = ({ i }) => {
  return (
    <motion.li
      className="menu-li"
      variants={variant1}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => alert(`Link to ${menuItems[i].text}`)}
    >
      <div className="icon-placeholder">{menuItems[i].icon}</div>
      <div className="text-placeholder">{menuItems[i].text}</div>
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
export const MenuToggle = ({ toggle, currentTheme }) => (

  

  <motion.button className={`menubtn theme-text-${currentTheme}-2 theme-fill-${currentTheme} theme-stroke-${currentTheme}`} onClick={toggle} whileHover={{ y: -2 }}>
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

const itemIds = [0, 1, 2, 3, 4];

// @ts-ignore
export const MenuList = ({ isOpen, themeIcons, handleSetTheme }) => (
  <motion.ul className={`menu-ul menu-${isOpen}-ul-zindex`}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}

        <nav className="mobile-theme-picker">
          
          {/* @ts-ignore */}
            {themeIcons.map(item => {
              return (
              <motion.a className="links" key={item.name} id={item.name} onClick={() => handleSetTheme(item.name)} whileHover={{ y: -2 }}>
                {item.icon}
              </motion.a>
              )
            })}
          </nav>
  </motion.ul>
);
