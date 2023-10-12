import './App.css';
import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
