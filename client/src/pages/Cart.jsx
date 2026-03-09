import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, subtotal, tax, total } = useCart();

  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-chocolate-brown mb-8">Your Shopping Bag</h1>

        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white/50 backdrop-blur-md rounded-cake border border-white">
            <ShoppingBag className="w-16 h-16 text-soft-pink mx-auto mb-4" />
            <p className="text-xl text-soft-gray italic mb-8">Your bag is empty...</p>
            <Link to="/products" className="btn-primary">
              Browse Our Cakes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* items list */}
            <div className="md:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-6 rounded-2xl shadow-md border border-soft-pink/30 flex gap-6 items-center transition-all hover:shadow-lg"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover shadow-sm" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-chocolate-brown mb-1">{item.name}</h3>
                      {item.config && (
                         <p className="text-sm text-soft-gray italic mb-2">
                            Custom: {item.config.size}, {item.config.flavor}, {item.config.layers} Layer(s)
                         </p>
                      )}
                      <p className="text-lg font-bold text-strawberry-pink">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="bg-vanilla-beige px-4 py-2 rounded-full border border-soft-pink/50">
                         <span className="text-sm font-bold text-chocolate-brown">Qty: {item.quantity}</span>
                       </div>
                       <button 
                        onClick={() => removeFromCart(index)}
                        className="p-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors shadow-sm"
                       >
                         <Trash2 className="w-5 h-5" />
                       </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="bg-white p-8 rounded-cake shadow-xl border border-soft-pink/30 h-fit sticky top-24">
              <h2 className="text-2xl font-playfair font-bold text-chocolate-brown mb-6 pb-4 border-b border-soft-pink/30">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-base">
                   <span className="text-soft-gray">Subtotal</span>
                   <span className="font-medium text-dark-brown">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                   <span className="text-soft-gray">Sales Tax (8%)</span>
                   <span className="font-medium text-dark-brown">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-soft-pink/50 pt-4 mt-2 flex justify-between items-center">
                   <span className="text-lg font-bold text-chocolate-brown">Total</span>
                   <span className="font-bold text-3xl text-strawberry-pink">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="w-full btn-primary flex items-center justify-center gap-2">
                Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-[10px] text-soft-gray text-center mt-4">
                Free delivery on orders over $100 across US
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
