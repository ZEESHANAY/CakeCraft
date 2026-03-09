import { motion } from 'framer-motion';
import { Truck, Clock, ShieldCheck, Map } from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-chocolate-brown mb-4"
          >
            Delivery Information
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-soft-gray max-w-2xl mx-auto"
          >
            Everything you need to know about how we get your sweet treats from our oven to your door.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Truck, title: "Nationwide Shipping", desc: "We ship our cakes anywhere within the contiguous United States using overnight priority packing." },
            { icon: Clock, title: "Processing Time", desc: "All standard orders require 48 hours notice. Custom 3D designer cakes require 72 hours notice." },
            { icon: ShieldCheck, title: "Freshness Guarantee", desc: "Cakes are flash-frozen right after baking and shipped in specialized insulated dry-ice coolers." },
            { icon: Map, title: "Local Delivery", desc: "We offer flat-rate $15 courier delivery for customers within a 20-mile radius of our bakery." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white p-8 rounded-cake shadow-md border border-soft-pink/30 flex gap-4"
            >
              <div className="bg-vanilla-beige p-4 rounded-full text-chocolate-brown h-fit">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-chocolate-brown mb-2">{item.title}</h3>
                <p className="text-soft-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-vanilla-beige p-8 text-center rounded-2xl border border-soft-pink"
        >
          <h3 className="text-2xl font-playfair font-bold text-chocolate-brown mb-4">Have questions about your delivery?</h3>
          <p className="text-soft-gray mb-6 text-sm">Our support team is available 7 days a week from 8am to 8pm EST.</p>
          <a href="/contact" className="inline-block btn-primary">Contact Support</a>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
