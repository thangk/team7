import {  AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill, BsGrid1X2Fill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaPinterest, FaTwitterSquare } from "react-icons/fa";

import { BsWatch } from 'react-icons/bs'
import { RiGroupFill, RiSettings4Fill, RiUserStarFill } from 'react-icons/ri'
import { MdDashboard } from 'react-icons/md'
import { VscSettings } from 'react-icons/vsc'
import kap from '../images/test_users/kap.jpg'

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
    },
    {
      name: 'pinterest',
      icon: <FaPinterest />
    }
  ]

  export const themeIcons = [
    {
      name: 'white',
       // @ts-ignore
      icon: <div className='w-6 h-6 drop-shadow-md bg-slate-50 rounded-full border-2 border-slate-200'></div>
    },
    {
      name: 'dark',
       // @ts-ignore
      icon: <div className='w-6 h-6 drop-shadow-md bg-gray-600 rounded-full border-2 border-gray-700'></div>
    },
    {
      name: 'blue',
       // @ts-ignore
      icon: <div className='w-6 h-6 drop-shadow-md bg-blue-200 rounded-full border-2 border-blue-300'></div>
    },
    {
      name: 'teal',
      // @ts-ignore
      icon: <div className='w-6 h-6 drop-shadow-md bg-teal-400 rounded-full border-2 border-teal-500'></div>
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
        icon: <BsFillCartFill />
    },
    {
        name: 'menu',
        url: '',
        icon: ''
    }
    
  ]


  export const adminNavLinks = [
    {
      name: 'dashboard',
      url: '/admin/dashboard',
      icon: <MdDashboard />
    },
    {
      name: 'administrators',
      url: '/admin/admins',
      icon: <RiUserStarFill />
    },
    {
      name: 'customers',
      url: '/admin/customers',
      icon: <RiGroupFill />
    },
    {
      name: 'products',
      url: '/admin/products',
      icon: <BsWatch />
    },
    {
      name: 'settings',
      url: '/admin/settings',
      icon: <VscSettings />
    },
    {
      name: 'import / export',
      url: '/admin/ie',
      icon: <RiSettings4Fill />
    }
  ]


  export const adminPanelTexts = {
    title: 'admin panel',
    versionName: 'infinity watches',
    versionNumber: 'v1.0'
  }

  export const user = {
    name: 'Kap Thang',
    icon: kap
  }

  export const importExportData = ['administrators', 'customers', 'products']

  export const dashboardStats = [
    {
      apiName: 'admins',
      longName: 'administrators'
    },
    {
      apiName: 'customers',
      longName: 'customers'
    },
    {
      apiName: 'watches',
      longName: 'products'
    },

  ]


  export const addAdmin = [
    {
      name: 'first name',
      type: 'text',
      options: []
    },
    {
      name: 'last name',
      type: 'text',
      options: []
    },
    {
      name: 'role',
      type: 'select',
      options: ['Staff', 'CEO', 'CFO', 'Manager', 'Tech Support', 'Engineer']
    },
    {
      name: 'email',
      type: 'email',
      options: []
    },
    {
      name: 'password',
      type: 'password',
      options: []
    }
  ]

  export const addCustomers = [
    {
      name: 'first name',
      type: 'text',
      options: []
    },
    {
      name: 'last name',
      type: 'text',
      options: []
    },
    {
      name: 'email',
      type: 'email',
      options: []
    },
    {
      name: 'password',
      type: 'password',
      options: []
    }
  ]

  export const addWatches = [
    {
      name: 'name',
      type: 'text',
      options: []
    },
    {
      name: 'brand',
      type: 'text',
      options: []
    },
    {
      name: 'desc',
      type: 'text',
      options: []
    },
    {
      name: 'case colour',
      type: 'text',
      options: []
    },
    {
      name: 'band colour',
      type: 'text',
      options: []
    },
    {
      name: 'band type',
      type: 'text',
      options: []
    },
    {
      name: 'movement type',
      type: 'text',
      options: []
    },
    {
      name: 'face size',
      type: 'text',
      options: []
    },
    {
      name: 'image url',
      type: 'text',
      options: []
    },
    {
      name: 'image upload',
      type: 'text',
      options: []
    },
    {
      name: 'price',
      type: 'number',
      options: []
    },
    {
      name: 'stock',
      type: 'number',
      options: []
    },
  ]


 