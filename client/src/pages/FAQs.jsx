import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How far in advance should I order my custom cake?",
      answer: "For standard catalog cakes, we require 48 hours notice. For custom 3D designer cakes, please allow at least 72 hours. For weddings and huge events, we recommend booking 1-2 months in advance."
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer: "Yes! While our main facility processes wheat, dairy, and nuts, we have dedicated equipment for our GF and vegan lines. You can select these options in the Custom Builder."
    },
    {
      question: "How do you ship a cake safely across the country?",
      answer: "We flash-freeze our cakes right after baking and icing. They are shipped in custom-fitted insulated coolers packed with dry ice. They arrive perfectly frozen—just thaw for 12 hours before enjoying!"
    },
    {
      question: "What is your cancellation policy?",
      answer: "Standard orders can be cancelled up to 48 hours before the scheduled ship date for a full refund. Custom orders cannot be cancelled once production has begun (usually 72 hours prior)."
    },
    {
      question: "Can I customize the flavors of a \"Featured Creation\"?",
      answer: "Our Featured Creations are sold as-is to ensure the perfect flavor profile. However, you can use our Custom Builder to recreate any cake with your exact flavor preferences."
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-chocolate-brown mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-soft-gray max-w-xl mx-auto"
          >
            Can't find the answer you're looking for? Reach out to our customer support team.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-soft-pink overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-chocolate-brown pr-8">{faq.question}</span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-soft-pink/30' : 'bg-vanilla-beige'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-strawberry-pink" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-soft-gray" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-soft-gray text-sm leading-relaxed border-t border-soft-pink/20 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
