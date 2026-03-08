import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-soft-pink">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-playfair font-bold text-chocolate-brown tracking-tight">
          CakeCraft
        </Link>
        <div className="hidden md:flex gap-8 items-center text-dark-brown font-medium">
          <Link to="/" className="hover:text-strawberry-pink transition-colors">Home</Link>
          <Link to="/products" className="hover:text-strawberry-pink transition-colors">Cakes</Link>
          <Link to="/builder" className="hover:text-strawberry-pink transition-colors">Design Your Cake</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/cart" className="relative p-2 hover:bg-soft-pink/20 rounded-full transition-all">
            <ShoppingCart className="w-6 h-6 text-chocolate-brown" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-strawberry-pink text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 hover:bg-soft-pink/20 rounded-full">
            <Menu className="w-6 h-6 text-chocolate-brown" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
