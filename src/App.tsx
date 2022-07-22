import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import LoginPage from './pages/loginPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsDetailsPage from './components/ProductsDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      {/* place to add navbar and header */}
      <Header />

      <Routes>
        {/* copy the following method to add your page after adding the file in "pages" folder */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/ProductDetails" element={<ProductsDetailsPage />} />{" "}
        <Route path='/About' element={<AboutPage />} />
        {/*Temporarily added to access product details*/}
      </Routes>

      {/* place to add footer */}
      <Footer />
    </Router>
  );
}

export default App;
