import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, Truck, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-vanilla-beige overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left space-y-8">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-playfair font-bold text-chocolate-brown leading-tight"
            >
              Craft Your Perfect <span className="text-strawberry-pink italic">Cake</span> with <span className="text-light-brown">CakeCraft</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-soft-gray max-w-lg leading-relaxed"
            >
              Design custom cakes with our smart cake builder. Fresh, artisanal, and delivered to your doorstep.
            </motion.p>
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex gap-4"
            >
              <Link to="/builder" className="btn-primary">
                Design Your Cake
              </Link>
              <Link to="/products" className="btn-secondary">
                Browse Shop
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-soft-pink/30 rounded-full blur-3xl group-hover:bg-soft-pink/50 transition-all duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.0&auto=format&fit=crop&w=1089&q=80" 
                alt="Beautiful Cake" 
                className="relative rounded-cake shadow-2xl w-[450px] transform hover:rotate-2 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-chocolate-brown">Why Choose CakeCraft?</h2>
            <div className="w-24 h-1 bg-soft-pink mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ChefHat, title: "Fresh Ingredients", desc: "We use only the finest organic ingredients for that premium taste.", color: "bg-cream" },
              { icon: Sparkles, title: "Custom Cake Designs", desc: "Our 3D builder lets you design the cake of your dreams in real-time.", color: "bg-soft-pink" },
              { icon: Truck, title: "Fast Delivery", desc: "Carefully handled and delivered fresh to your door across the US.", color: "bg-vanilla-beige" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium text-center space-y-6 group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-chocolate-brown" />
                </div>
                <h3 className="text-2xl font-bold text-chocolate-brown">{feature.title}</h3>
                <p className="text-soft-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-24 bg-cream/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-chocolate-brown">Featured Creations</h2>
              <p className="text-soft-gray mt-2">Our most loved signature cakes</p>
            </div>
            <Link to="/products" className="text-strawberry-pink font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Chocolate Dream", price: 45, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80" },
              { name: "Red Velvet Bliss", price: 40, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80" },
              { name: "Vanilla Bean", price: 35, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" },
              { name: "Strawberry Swirl", price: 38, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80" }
            ].map((cake, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="font-bold text-chocolate-brown">{cake.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-strawberry-pink font-bold">${cake.price}</span>
                  <Link to="/products" className="text-xs bg-cream px-3 py-1 rounded-full text-chocolate-brown hover:bg-soft-pink transition-colors">
                    Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-chocolate-brown">Sweet Words</h2>
            <p className="text-soft-gray mt-2">What our happy customers say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "The custom 3D builder was so fun to use! The cake arrived exactly how I designed it.", rating: 5 },
              { name: "Michael R.", text: "Best red velvet I've ever had in the US. The delivery was perfectly on time.", rating: 5 },
              { name: "Emily D.", text: "Used CakeCraft for my wedding. The premium feel and taste were exceptional.", rating: 5 }
            ].map((t, i) => (
              <motion.div
                key={i}
                className="p-8 bg-vanilla-beige/20 rounded-cake border border-soft-pink/20"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4 text-orange-300">
                  {[...Array(t.rating)].map((_, i) => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-dark-brown italic mb-6">"{t.text}"</p>
                <p className="font-bold text-chocolate-brown">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-chocolate-brown text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-soft-pink rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Start Designing Your Cake Today</h2>
          <p className="text-soft-pink mb-10 max-w-xl mx-auto">
            Experience the future of bakery orders with our interactive 3D builder.
          </p>
          <Link to="/builder" className="bg-white text-chocolate-brown px-10 py-4 rounded-full font-bold hover:bg-soft-pink transition-all shadow-xl">
            Go to Cake Builder
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

