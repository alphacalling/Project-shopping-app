import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-800 shadow-lg">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-6">

        {/* Logo */}
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-12 hover:opacity-90 transition-opacity" alt="Logo" />
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-white font-medium">
          <NavLink to="/" className="hover:text-green-400 transition-colors duration-200">
            Home
          </NavLink>

          <NavLink to="/cart">
            <div className="relative flex items-center">
              <FaShoppingCart className="text-2xl text-white hover:text-green-400 transition-colors duration-200" />

              {/* Cart Count Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5 flex items-center justify-center rounded-full text-white animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
