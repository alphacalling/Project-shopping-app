import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-200 min-h-screen py-8 px-4 flex flex-col items-center">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row w-full max-w-4xl items-start lg:space-x-10 space-y-8 lg:space-y-0">

          {/* Cart Items */}
          <div className="w-full lg:w-2/3 space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white w-full lg:w-1/3 p-6 rounded-lg shadow-md sticky top-10 lg:top-20">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Your Cart
            </h2>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Summary
            </h3>
            <p className="text-lg text-yellow-600 font-medium mb-2">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>
            <p className="text-lg font-medium text-gray-700 mb-6">
              Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span>
            </p>
            <button className="w-full bg-yellow-500 rounded-md text-white py-2 text-lg font-semibold hover:bg-yellow-600 transition-colors">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-6 text-center mt-10">
          <h1 className="text-3xl font-bold font-serif">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-green-500 rounded-md text-white py-3 px-8 text-lg font-semibold hover:bg-green-600 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
