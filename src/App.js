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
import CheckOut from './pages/CheckOut';
import Test from './pages/Test';
import TicketTypes from './pages/TicketTypes';
import TicketSuccess from './pages/TicketSuccess';
import MerchSuccess from './pages/MerchSuccess';
import Payment from './pages/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickettypes" element={<TicketTypes />} />
        <Route path="/buyticket" element={<Ticket />} />
        <Route path="/ticketsuccess" element={<TicketSuccess />} />
        <Route path="/merchsuccess" element={<MerchSuccess />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
