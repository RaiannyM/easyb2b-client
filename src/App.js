import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import ProductsList from "./pages/productList/productList";
import Orders from "./pages/orders/orders";

function App() {
  return (
    <div className="body bg-white">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<ProductsList />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
