import './App.css';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/home';
import Checkout from './pages/checkout';
import Pedidos from './pages/pedidos';
import ProductsList from './pages/productsList';
import Description from './pages/description';
import ControlPanel from './pages/controlPanel';


import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/description" element={<Description />} />
          <Route path="/controlPanel" element={<ControlPanel />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
