import './App.css';
import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Ticket from './pages/BuyTicket';
import Products from './pages/Products';
import CheckOut2 from './pages/CheckOut2';
import Test from './pages/Test';
import TicketTypes from './pages/TicketTypes';
import TicketSuccess from './pages/TicketSuccess';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MerchSuccess from './pages/MerchSuccess';
import Payment from './pages/Payment';
import CheckOut from './pages/CheckOut';
import Products2 from './pages/Products2';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickettypes" element={<TicketTypes />} />
        <Route path="/buyticket" element={<Ticket />} />
        <Route path="/ticketsuccess" element={<TicketSuccess />} />
        <Route path="/merchsuccess" element={<MerchSuccess />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products2" element={<Products2 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/test" element={<Test />} />
        <Route path="/checkout" element={<CheckOut2 />} />
        <Route path="/checkout2" element={<CheckOut />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
