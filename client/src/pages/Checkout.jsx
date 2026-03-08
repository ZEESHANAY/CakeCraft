import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CreditCard, Truck, User, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    deliveryDate: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="bg-cream min-h-screen py-24 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 backdrop-blur-md p-12 rounded-cake shadow-2xl border border-white text-center max-w-lg mx-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-playfair font-bold text-chocolate-brown mb-4">Order Received!</h1>
          <p className="text-soft-gray mb-8">
            Thank you for choosing CakeCraft. Your artisanal treats are being prepared with love and will be delivered on {formData.deliveryDate}.
          </p>
          <button onClick={() => navigate('/')} className="btn-primary w-full">
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-playfair font-bold text-chocolate-brown mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-cake shadow-xl border border-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-chocolate-brown flex items-center gap-2">
                  <User className="w-5 h-5" /> Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Full Name" onChange={handleInputChange} className="input-checkout" />
                  <input name="email" required type="email" placeholder="Email Address" onChange={handleInputChange} className="input-checkout" />
                  <input name="phone" required placeholder="Phone Number" onChange={handleInputChange} className="input-checkout" />
                  <input name="deliveryDate" required type="date" onChange={handleInputChange} className="input-checkout" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-chocolate-brown flex items-center gap-2">
                  <Truck className="w-5 h-5" /> Delivery Address
                </h3>
                <input name="address" required placeholder="Street Address" onChange={handleInputChange} className="w-full input-checkout" />
                <div className="grid grid-cols-2 gap-4">
                  <input name="city" required placeholder="City" onChange={handleInputChange} className="input-checkout" />
                  <input name="zip" required placeholder="ZIP Code" onChange={handleInputChange} className="input-checkout" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-chocolate-brown flex items-center gap-2">
                  <CreditCard className="w-5 h-5" /> Payment Method
                </h3>
                <div className="p-4 border-2 border-soft-pink rounded-xl bg-cream/20 flex items-center justify-between">
                  <span className="font-medium text-chocolate-brown">Secure Card Payment</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                  </div>
                </div>
                <p className="text-[10px] text-soft-gray italic">
                  * Note: This is an artisanal demo. Stripe integration can be added here.
                </p>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-xl">
                Place Order ${total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Side Summary */}
          <div className="space-y-6 h-fit sticky top-24">
             <div className="bg-white/50 backdrop-blur-md p-6 rounded-cake border border-white">
                <h3 className="font-bold text-chocolate-brown mb-4 border-b border-soft-pink/30 pb-2">Your Order</h3>
                <div className="max-h-64 overflow-y-auto space-y-4">
                   {cart.map((item, i) => (
                     <div key={i} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                     </div>
                   ))}
                </div>
                <div className="border-t border-soft-pink/30 mt-4 pt-4 space-y-2">
                   <div className="flex justify-between text-lg font-bold text-chocolate-brown">
                      <span>Total to Pay</span>
                      <span className="text-strawberry-pink">${total.toFixed(2)}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
