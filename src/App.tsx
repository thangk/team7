import './styles/App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Products_DetailsPage from './components/Products_DetailsPage';

function App() {
  return (
    <Router>

      {/* place to add navbar and header */}

      
      <Routes>
        {/* copy the following method to add your page after adding the file in "pages" folder */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/ProductDetails" element={<Products_DetailsPage/>} /> {/*Temporarily added to access product details*/}
      </Routes>

      {/* place to add footer */}
    </Router>
  );
}

export default App;
