import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const MOCK_PRODUCTS = [
  { id: 1, name: "Chocolate Dream", price: 45, category: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80", desc: "Rich chocolate layers with ganache" },
  { id: 2, name: "Red Velvet Bliss", price: 40, category: "Cakes", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80", desc: "Classic red velvet with cream cheese icing" },
  { id: 3, name: "Vanilla Bean", price: 35, category: "Cakes", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80", desc: "Pure Madagascar vanilla bean goodness" },
  { id: 4, name: "Strawberry Swirl", price: 38, category: "Cakes", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80", desc: "Fresh strawberries and light sponge" },
  { id: 5, name: "Rainbow Cupcakes", price: 24, category: "Cupcakes", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=400&q=80", desc: "Set of 6 colorful artisanal cupcakes" },
  { id: 6, name: "Classic Cheesecake", price: 42, category: "Cheesecake", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80", desc: "Creamy New York style cheesecake" },
];

const Products = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cakes", "Cupcakes", "Cheesecake"];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate-brown mb-4 text-center">Our Bakery Catalog</h1>
          <p className="text-soft-gray max-w-2xl mx-auto">Browse our selection of freshly baked treats, from classic cakes to artisanal cupcakes.</p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-gray w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for cakes..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-soft-pink focus:outline-none focus:ring-2 focus:ring-soft-pink bg-white/80 backdrop-blur-sm shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "bg-chocolate-brown text-white shadow-md" 
                    : "bg-white text-dark-brown hover:bg-soft-pink/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="card-premium group overflow-hidden"
            >
              <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-chocolate-brown font-bold shadow-sm">
                  ${product.price}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-chocolate-brown">{product.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-light-brown font-bold">{product.category}</span>
                </div>
                <p className="text-soft-gray text-sm line-clamp-2">{product.desc}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-cream text-chocolate-brown border border-soft-pink py-2 rounded-full hover:bg-chocolate-brown hover:text-white transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-soft-gray italic">No treats found matching your search...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
