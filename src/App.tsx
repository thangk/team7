import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsDetailsPage from './components/ProductsDetailsPage';
import Header from './components/Header';
import LoremPages from './components/LoremPages';
import Admin from './pages/Admin';
import AdminProducts from './components/AdminProducts';
import AdminDashboard from './components/AdminDashboard';
import AdminAdmins from './components/AdminAdmins';
import AdminCustomers from './components/AdminCustomers';
import AdminImportExport from './components/AdminImportExport';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import { AuthContextProvider } from './contexts/AuthContext';
import AdminSignin from './pages/AdminSignin';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import PrivateRouteCustomer from './components/PrivateRouteCustomer';

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
import FindStore from './pages/FindStore';
import FAQPage from './components/FAQPage';






const App = () => {


  return (
      <AuthContextProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Header>{<Home />}</Header>} />
          
          
          <Route path='/cart' element={<Header>{<Cart />}</Header>} />
          <Route path='/cart/order-placed' element={<Header>{<CartOrderPlaced />}</Header>} />
          <Route path='/reset-password' element={<Header>{<PasswordResetPage />}</Header>} />
          <Route path='/email-sent' element={<Header>{<ResetEmailSent />}</Header>} />
          <Route path="/products" element={<Header>{<Products />}</Header>} />
          <Route path="/products/:id" element={<Header>{<ProductsDetailsPage />}</Header>} />
          <Route path="/404" element={<Header>{<ErrorPage />}</Header>} />
          <Route path='/about-us' element={<Header>{<AboutUs />}</Header>} />
          <Route path='/contact-us' element={<Header>{<ContactUs />}</Header>} />

          <Route path='/find-store' element={<Header>{<FindStore />}</Header>} />

          <Route path='/faq' element={<Header>{<FAQPage />}</Header>} />
           
          <Route path='/signup' element={<Header>{<SignupPage />}</Header>} />
          <Route path='/signup-success' element={<Header>{<SignupSuccess />}</Header>} />
          <Route path="/login" element={<Header>{<LoginPage />}</Header>} />
          
          {/* private routes for customer */}
          <Route path='/account' element={<PrivateRouteCustomer />}>
            <Route path='/account/dashboard' element={<Header>{<Account>{<AccountDashboard />}</Account>}</Header>} />
            <Route path='/account/orders' element={<Header>{<Account>{<AccountOrders />}</Account>}</Header>} />
            <Route path='/account/settings' element={<Header>{<Account>{<AccountAccountSettings />}</Account>}</Header>} />
          </Route>

          <Route path="/admin" element={<AdminSignin />} />

          {/* private routes for admin */}
          <Route path='/admin' element={<PrivateRouteAdmin />}>
            <Route path="/admin/dashboard" element={<Admin>{<AdminDashboard />}</Admin>} />
            <Route path="/admin/admins" element={<Admin>{<AdminAdmins />}</Admin>} />
            <Route path="/admin/customers" element={<Admin>{<AdminCustomers />}</Admin>} />
            <Route path="/admin/products" element={<Admin>{<AdminProducts />}</Admin>} />
            <Route path="/admin/settings" element={<Admin>{<AdminSettings />}</Admin>} />
            <Route path="/admin/ie" element={<Admin>{<AdminImportExport />}</Admin>} />
          </Route>
        
          {/* error page */}
          <Route path='/:lorem' element={<Header>{<LoremPages />}</Header>} />
        </Routes>


        
      </AuthContextProvider>


        

  )
}



export default App;
