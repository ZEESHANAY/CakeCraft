import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your CakeCraft assistant. How can I help you design your perfect cake today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (text) => {
    const input = text.toLowerCase();
    let response = "I'm not sure about that. Would you like to check our custom cake builder?";

    if (input.includes('price') || input.includes('cost')) {
      response = "Our cakes start at $20 for a small size. A 2-layer chocolate cake with fruit toppings is estimated at $42. Check our builder for a real-time quote!";
    } else if (input.includes('flavor') || input.includes('chocolate') || input.includes('vanilla')) {
      response = "We offer Chocolate, Vanilla, and Strawberry flavors. Which one is your favorite?";
    } else if (input.includes('delivery') || input.includes('time')) {
      response = "We offer fast delivery across the US. Orders typically arrive within 2-3 business days.";
    } else if (input.includes('hello') || input.includes('hi')) {
      response = "Hello! Ready to craft something delicious?";
    } else if (input.includes('custom') || input.includes('design')) {
      response = "You can design your own cake in our 'Design Your Cake' section! It includes a 3D preview.";
    }

    return response;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: generateResponse(input), sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-chocolate-brown text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group border-4 border-white"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-12 right-0 bg-white text-chocolate-brown px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-soft-pink">
           Questions? Ask me!
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-cake shadow-2xl z-50 overflow-hidden border border-soft-pink"
          >
            {/* Header */}
            <div className="bg-chocolate-brown p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">CakeCraft Assistant</h3>
                  <p className="text-[10px] text-soft-pink italic">Online & Baking 🍰</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-cream/30 space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-chocolate-brown text-white rounded-tr-none shadow-sm' 
                      : 'bg-white text-dark-brown border border-soft-pink/30 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-soft-pink/30 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="flex-grow text-sm focus:outline-none bg-cream/20 px-4 py-2 rounded-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-strawberry-pink text-white p-2 rounded-full hover:bg-chocolate-brown transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Assistant;
