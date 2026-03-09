import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CustomBuilder from './pages/CustomBuilder';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import DeliveryInfo from './pages/DeliveryInfo';
import FAQs from './pages/FAQs';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Assistant from './components/Assistant';
import { CartProvider } from './context/CartContext';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/builder" element={<CustomBuilder />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/delivery" element={<DeliveryInfo />} />
              <Route path="/faqs" element={<FAQs />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Assistant />
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
