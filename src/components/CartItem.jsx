import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-lg max-w-3xl mx-auto">

      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-lg object-cover h-[250px] w-[300px]"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 md:space-y-6">
        <h1 className="font-bold text-xl text-gray-800">{item.title}</h1>
        <p className="text-gray-600 text-sm leading-snug">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-green-700 font-semibold text-lg">${item.price.toFixed(2)}</p>
          <button
            className="bg-red-100 p-3 rounded-full hover:bg-red-200 transition duration-200"
            onClick={removeFromCart}
          >
            <RiDeleteBinFill className="text-red-600 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
