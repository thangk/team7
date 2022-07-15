import './styles/App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>

      {/* place to add navbar and header */}

      <Routes>
        {/* copy the following method to add your page after adding the file in "pages" folder */}
        <Route path='/' element={<Products />} />
        <Route path='/' element={<ErrorPage />} />
      </Routes>

      {/* place to add footer */}
    </Router>
  );
}

export default App;
