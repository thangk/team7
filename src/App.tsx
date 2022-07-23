import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import LoginPage from './pages/loginPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsDetailsPage from './components/ProductsDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import LoremPages from './components/LoremPages';

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
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/ProductDetails" element={<ProductsDetailsPage />} />{" "}
        <Route path='/About' element={<AboutPage />} />

        {/* this line has to be in the last line */}
        <Route path='/:lorem' element={<LoremPages />} /> 

        {/*Temporarily added to access product details*/}
      </Routes>

      {/* place to add footer */}
      <Footer />
    </Router>
  );
}

export default App;
