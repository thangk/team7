import { AiFillShopping, AiOutlineUser } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export const headerSocialIcons = [
    {
      name: 'facebook',
      icon: <FaFacebookSquare />
    },
    {
      name: 'instagram',
      icon: <FaInstagramSquare />
    },
    {
      name: 'twitter',
      icon: <FaTwitterSquare />
    }
  ]

  export const headerNavLinks = [
    {
        name: 'products',
        url: '/products',
        icon: <BsGrid1X2Fill />
    },
    {
        name: 'account',
        url: '/account',
        icon: <AiOutlineUser />
    },
    {
        name: 'cart',
        url: '/cart',
        icon: <AiFillShopping />
    },
    {
        name: 'menu',
        url: '',
        icon: ''
    }
    
  ]