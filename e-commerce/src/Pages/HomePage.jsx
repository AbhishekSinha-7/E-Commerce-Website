

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 49.99, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 19.99, image: "/images/product3.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500 mb-4">${product.price}</p>
          <Link
            to={`/products/${product.id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
