import './App.css';
import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Ticket from './pages/BuyTicket';
import Test from './pages/Test';
import TicketTypes from './pages/TicketTypes';
import TicketSuccess from './pages/TicketSuccess';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectClass from './pages/SelectClass';
import TicketPayment from './pages/TicketPayment';
import ETicket from './pages/ETicket';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickettypes" element={<TicketTypes />} />
        <Route path="/buyticket" element={<Ticket />} />
        <Route path="/ticketsuccess" element={<TicketSuccess />} />
        <Route path="/selectclass" element={<SelectClass />} />
        <Route path="/ticketpayment" element={<TicketPayment />} />
        <Route path="/eticket/:id" element={<ETicket />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
