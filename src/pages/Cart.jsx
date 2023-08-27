import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  {Link} from 'react-router-dom';
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector( (state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () =>{
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])


  return (
    <div className="bg-gray-200 h-full">
    {
      cart.length > 0 ? 
      (<div className="flex items-center mr-20">
        <div>
          {
            cart.map( (item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
        </div>
        
        <div>

      <div className="py-[200px]">
          <div className="uppercase font-semibold font-xl text-green-600 mr-[50px]">
            Your Cart
          </div>

          <div className="uppercase font-bold text-4xl text-green-800 mb-4">
            Summary
          </div>

          <p>
            <span className="text-yellow-600 font-bold text-lg mr-6">Total Items:{cart.length}</span>
          </p>
      </div>

          <div className="mt-38 mb">
            <p className="uppercase font-semibold text-lg text-brown ml-4">Total Amount: <span className="font-bold">${totalAmount}</span></p>
            <button className="bg-yellow-500 rounded-md text-white  text-xl font-semibold mt-6 items-center py-4 px-10 mr-10 mb-4">
              CheckOut Now
            </button>
          </div>

        </div>
        
      </div>) :
      (
        <div className="flex justify-center items-center flex-col mt-6">
          <h1 className="text-5xl font-bold font-serif">Cart Empty</h1>
          <Link to={'/'}>
          <button className="bg-green-500 rounded-md text-white  text-xl font-semibold mt-6 items-center py-4 px-10 mr-10 mb-4">
            Shop Now
          </button>
          </Link>
        </div>
      )
    }
    </div>
  )
};

export default Cart;
