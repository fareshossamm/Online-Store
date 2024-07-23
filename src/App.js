import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import ConatctUs from './components/ConatctUs';
import Services from './components/Services';
import Cart from './components/Cart';
import Sales from './components/Sales';

function App() {
  return (
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
  );
  
}

export default App;
