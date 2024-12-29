import React, { useState } from "react";
import { removeItemFromCart } from "../Utils/CartUtils";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
  ]);

  const handleRemove = (id) => {
    const updatedCart = removeItemFromCart(cart, id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>{item.name} - ${item.price}</div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
