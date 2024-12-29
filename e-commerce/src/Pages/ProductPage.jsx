import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details (this is just a mock, replace with API call)
    const fetchedProduct = { id, name: "Product 1", price: 29.99, description: "This is a great product!" };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 my-4">${product.price}</p>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
        onClick={() => alert('Added to cart!')}
      >
      Add to Cart
        </button>
    </div>
  );
};

export default ProductPage;
