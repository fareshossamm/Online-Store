import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import ConatctUs from './components/ConatctUs';
import Services from './components/Services';
import Cart from './components/Cart';
import Sales from './components/Sales';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <ProductsList />
              <Sales />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ConatctUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
