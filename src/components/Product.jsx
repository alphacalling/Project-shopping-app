import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">

      {/* Product Title */}
      <h2 className="text-gray-800 font-semibold text-lg text-center mb-2">{post.title}</h2>

      {/* Product Description */}
      <p className="text-gray-600 text-sm text-center mb-4">{post.description.split(" ").slice(0, 15).join(" ") + "..."}</p>

      {/* Product Image */}
      <div className="w-full h-[180px] flex justify-center mb-4">
        <img src={post.image} alt={post.title} className="object-contain h-full max-w-full" />
      </div>

      {/* Price and Add/Remove Button */}
      <div className="flex flex-col items-center w-full mt-2">
        <p className="text-green-600 font-bold text-lg">${post.price.toFixed(2)}</p>

        {/* Add/Remove Button */}
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="mt-2 bg-red-500 text-white rounded-full px-4 py-1 text-sm transition duration-200 hover:bg-red-600"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="mt-2 bg-blue-500 text-white rounded-full px-4 py-1 text-sm transition duration-200 hover:bg-blue-600"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
