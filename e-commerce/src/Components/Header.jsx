import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400">E-Commerce</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/cart" className="hover:text-blue-400">Cart</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
