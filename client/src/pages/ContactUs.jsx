import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-chocolate-brown mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-soft-gray max-w-2xl mx-auto"
          >
            Have a question about an order, custom design, or just want to say hello? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-cake shadow-md border border-soft-pink/30 space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate-brown mb-6">Contact Information</h3>
              <div className="flex items-start gap-4">
                <div className="bg-vanilla-beige p-3 rounded-full text-chocolate-brown">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-brown">Our Bakery</h4>
                  <p className="text-soft-gray text-sm">123 Sweet Street<br />Confectionery City, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-vanilla-beige p-3 rounded-full text-chocolate-brown">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-brown">Phone</h4>
                  <p className="text-soft-gray text-sm">(555) 123-BAKE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-vanilla-beige p-3 rounded-full text-chocolate-brown">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-brown">Email</h4>
                  <p className="text-soft-gray text-sm">hello@cakecraft.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form className="bg-white p-8 rounded-cake shadow-md border border-soft-pink/30 space-y-4">
              <div>
                <label className="block text-sm font-bold text-chocolate-brown border-soft-pink mb-1">Name</label>
                <input type="text" className="w-full bg-vanilla-beige/50 border border-soft-pink px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-chocolate-brown border-soft-pink mb-1">Email</label>
                <input type="email" className="w-full bg-vanilla-beige/50 border border-soft-pink px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-sm font-bold text-chocolate-brown border-soft-pink mb-1">Message</label>
                <textarea rows="4" className="w-full bg-vanilla-beige/50 border border-soft-pink px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full btn-primary flex justify-center items-center gap-2 mt-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
