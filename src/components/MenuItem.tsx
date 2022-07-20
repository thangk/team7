import { motion } from 'framer-motion'
import { FaInfo, FaMapMarkerAlt, FaPhoneAlt, FaRegNewspaper, FaUsers } from "react-icons/fa";

const xValue = (window.innerWidth < 640) ? 50 : 0;
const yValue = (window.innerWidth < 640) ? 0 : 50;

const variants = {

    

    open: {
        x: 0,
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
        x: xValue,
      y: yValue,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


  const menuItems = [
    {
        icon: <FaUsers />,
        text: 'Community'
    },
    {
        icon: <FaMapMarkerAlt />,
        text: 'Find a store'
    },
    {
        icon: <FaRegNewspaper />,
        text: 'Newsletter'
    },
    {
        icon: <FaInfo />,
        text: 'About Us'
    },
    {
        icon: <FaPhoneAlt />,
        text: 'Contact'
    },
  ]

// @ts-ignore
export const MenuItem = ({ i }) => {
  return (
    <motion.li
        className='menu-li'
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => alert('implementing redirect soon')}
    >
      <div className="icon-placeholder">{menuItems[i].icon}</div>
      <div className="text-placeholder">{menuItems[i].text}</div>
    </motion.li>
  );
};