import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsDetailsPage from './components/ProductsDetailsPage';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import LoremPages from './components/LoremPages';
import Admin from './pages/Admin';
import AdminProducts from './components/AdminProducts';
import AdminDashboard from './components/AdminDashboard';
import AdminAdmins from './components/AdminAdmins';
import AdminCustomers from './components/AdminCustomers';
import AdminImportExport from './components/AdminImportExport';

import { AuthContextProviderAdmin } from './contexts/AuthContextAdmin';
import AdminSignin from './pages/AdminSignin';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';

import LoginPage from './pages/CustomerLogin';

import SignupPage from './pages/SignupPage';
import Account from './pages/Account';
import Cart from './pages/Cart';
import PasswordResetPage from './pages/PasswordResetPage';
import ResetEmailSent from './pages/ResetEmailSent';
import SignupSuccess from './pages/SignupSuccess';
import AccountDashboard from './components/AccountDashboard';
import AccountOrders from './components/AccountOrders';
import AccountAccountSettings from './components/AccountAccountSettings';
import CartOrderPlaced from './pages/CartOrderPlaced';
import AdminSettings from './components/AdminSettings';
import { useTheme } from './contexts/ThemeContext';
import { useEffect } from 'react';




const App = () => {

  const { currentTheme } = useTheme()

  
  useEffect(() => {
    // console.log(`theme-bg-${currentTheme}`)
  }, [currentTheme])

  return (
      <AuthContextProviderAdmin>
        <Routes>
          {/* public */}
          {/* <div className={`theme-bg-${currentTheme}`}> */}
          
          <Route path="/" element={<Header>{<Home />}</Header>} />
          <Route path="/login" element={<Header>{<LoginPage />}</Header>} />
          <Route path='/signup' element={<Header>{<SignupPage />}</Header>} />
          <Route path='/signup-success' element={<Header>{<SignupSuccess />}</Header>} />
          {/* @ts-ignore */}
          <Route path='/account' element={<Header>{<Account>{<AccountDashboard />}</Account>}</Header>} />
          {/* @ts-ignore */}
          <Route path='/account/orders' element={<Header>{<Account>{<AccountOrders />}</Account>}</Header>} />
          {/* @ts-ignore */}
          <Route path='/account/settings' element={<Header>{<Account>{<AccountAccountSettings />}</Account>}</Header>} />
          <Route path='/cart' element={<Header>{<Cart />}</Header>} />
          <Route path='/cart/order-placed' element={<Header>{<CartOrderPlaced />}</Header>} />
          <Route path='/reset-password' element={<Header>{<PasswordResetPage />}</Header>} />
          <Route path='/email-sent' element={<Header>{<ResetEmailSent />}</Header>} />
          <Route path="/products" element={<Header>{<Products />}</Header>} />
          <Route path="/products/:id" element={<Header>{<ProductsDetailsPage />}</Header>} />
          <Route path="/404" element={<Header>{<ErrorPage />}</Header>} />
          <Route path='/about' element={<Header>{<AboutPage />}</Header>} />
          <Route path='/:lorem' element={<Header>{<LoremPages />}</Header>} /> 
          
          <Route path="/admin" element={<AdminSignin />} />
          {/* </div> */}

          {/* private */}
          <Route path='/admin' element={<PrivateRouteAdmin />}>
            <Route path="/admin/dashboard" element={<Admin>{<AdminDashboard />}</Admin>} />
            <Route path="/admin/admins" element={<Admin>{<AdminAdmins />}</Admin>} />
            <Route path="/admin/customers" element={<Admin>{<AdminCustomers />}</Admin>} />
            <Route path="/admin/products" element={<Admin>{<AdminProducts />}</Admin>} />
            <Route path="/admin/settings" element={<Admin>{<AdminSettings />}</Admin>} />
            <Route path="/admin/ie" element={<Admin>{<AdminImportExport />}</Admin>} />
          </Route>
        </Routes>

        
      </AuthContextProviderAdmin>


        

  )
}



export default App;
