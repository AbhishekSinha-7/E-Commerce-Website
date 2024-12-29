import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;


