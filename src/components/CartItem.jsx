import React from 'react';
import {RiDeleteBinFill}  from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

  const CartItem = ({item, itemIndex}) => {
    const dispatch  = useDispatch()
    const removeFromCart = () => {
      dispatch(remove (item.id));
      toast.error("Item Removed")
    }

  return (
    
    <div className='w-3/5'>

    <div className='flex py-6 border-b-4 border-gray-600 justify-center ml-18 mb-4'>

      <div className='flex justify-between'>
        <img src={item.image} alt='' className='w-[350px] h-[250px] mt-10 mx-10 mr-6 rounded-lg' />
      </div>

          <div className='h-9/15 mx-12 w'>
            <h1 className='font-bold text-2xl'>{item.title}</h1>
            <h1 className='font-semibold mt-5'>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          

          <div className='flex justify-between mt-10'>
            <p className='text-green-700 font-bold text-2xl'>${item.price}</p>

            <div className='h-14 w-14 bg-red-100 rounded-full flex items-center justify-center ' onClick={removeFromCart}>
            <RiDeleteBinFill className='text-red-700 font-bold text-2xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem