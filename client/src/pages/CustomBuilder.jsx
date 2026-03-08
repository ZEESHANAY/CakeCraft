import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { ChevronRight, ChevronLeft, Check, Sparkles, AlertCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

// Pricing configuration
const OPTIONS = {
  size: [
    { id: 'small', label: 'Small (6")', price: 20 },
    { id: 'medium', label: 'Medium (8")', price: 35 },
    { id: 'large', label: 'Large (10")', price: 50 },
  ],
  flavor: [
    { id: 'chocolate', label: 'Chocolate', extra: 5, color: '#5C3A21' },
    { id: 'vanilla', label: 'Vanilla', extra: 3, color: '#F3E5AB' },
    { id: 'strawberry', label: 'Strawberry', extra: 4, color: '#FF8FAB' },
  ],
  layers: [
    { id: 1, label: '1 Layer', extra: 0 },
    { id: 2, label: '2 Layers', extra: 6 },
    { id: 3, label: '3 Layers', extra: 10 },
  ],
  frosting: [
    { id: 'buttercream', label: 'Buttercream', extra: 4, color: '#FDF5E6' },
    { id: 'cream-cheese', label: 'Cream Cheese', extra: 5, color: '#FFFDD0' },
    { id: 'ganache', label: 'Chocolate Ganache', extra: 6, color: '#3D2B1F' },
  ],
  extras: [
    { id: 'photo', label: 'Photo Print', price: 8 },
    { id: 'fruit', label: 'Fruit Toppings', price: 6 },
    { id: 'fondant', label: 'Fondant Decoration', price: 10 },
    { id: 'message', label: 'Custom Message', price: 2 },
  ]
};

// 3D Procedural Cake Component
const Cake3D = ({ config }) => {
  const flavorColor = OPTIONS.flavor.find(f => f.id === config.flavor)?.color || '#F3E5AB';
  const frostingColor = OPTIONS.frosting.find(f => f.id === config.frosting)?.color || '#FFF5E4';
  const layers = config.layers;
  const sizeMap = { small: 1.5, medium: 2, large: 2.5 };
  const radius = sizeMap[config.size];

  return (
    <group position={[0, -1, 0]}>
      {[...Array(layers)].map((_, i) => (
        <group key={i} position={[0, i * 0.6, 0]}>
          {/* Cake Layer */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[radius, radius, 0.5, 32]} />
            <meshStandardMaterial color={flavorColor} />
          </mesh>
          {/* Frosting between layers or on top */}
          <mesh position={[0, 0.26, 0]} castShadow>
            <cylinderGeometry args={[radius + 0.05, radius + 0.05, 0.1, 32]} />
            <meshStandardMaterial color={frostingColor} roughness={0.3} />
          </mesh>
        </group>
      ))}
      {/* Top Decoration placeholder if extras selected */}
      {config.extras.length > 0 && (
        <mesh position={[0, layers * 0.6, 0]}>
           <torusGeometry args={[radius * 0.7, 0.05, 16, 100]} />
           <meshStandardMaterial color="#FF8FAB" />
        </mesh>
      )}
    </group>
  );
};

const CustomBuilder = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    size: 'medium',
    flavor: 'vanilla',
    layers: 1,
    frosting: 'buttercream',
    extras: []
  });

  const calculatePrice = () => {
    const basePrice = OPTIONS.size.find(s => s.id === config.size).price;
    const flavorExtra = OPTIONS.flavor.find(f => f.id === config.flavor).extra;
    const layerExtra = OPTIONS.layers.find(l => l.id === config.layers).extra;
    const frostingExtra = OPTIONS.frosting.find(f => f.id === config.frosting).extra;
    const extrasPrice = config.extras.reduce((total, extraId) => {
      const extra = OPTIONS.extras.find(e => e.id === extraId);
      return total + (extra ? extra.price : 0);
    }, 0);

    const subtotal = basePrice + flavorExtra + layerExtra + frostingExtra + extrasPrice;
    const tax = subtotal * 0.08;
    return { subtotal, tax, total: subtotal + tax };
  };

  const { subtotal, tax, total } = calculatePrice();

  const handleNext = () => step < 5 && setStep(step + 1);
  const handlePrev = () => step > 1 && setStep(step - 1);

  const toggleExtra = (id) => {
    setConfig(prev => ({
      ...prev,
      extras: prev.extras.includes(id) 
        ? prev.extras.filter(e => e !== id) 
        : [...prev.extras, id]
    }));
  };

  const steps = [
    { id: 1, title: 'Choose Size', key: 'size', options: OPTIONS.size },
    { id: 2, title: 'Pick Flavor', key: 'flavor', options: OPTIONS.flavor },
    { id: 3, title: 'Number of Layers', key: 'layers', options: OPTIONS.layers },
    { id: 4, title: 'Select Frosting', key: 'frosting', options: OPTIONS.frosting },
    { id: 5, title: 'Add Extras', key: 'extras', options: OPTIONS.extras }
  ];

  return (
    <div className="bg-cream min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        
        {/* Left: 3D Preview */}
        <div className="bg-white/50 backdrop-blur-md rounded-cake shadow-xl relative min-h-[500px] overflow-hidden border border-white">
          <div className="absolute top-6 left-6 z-10">
            <h2 className="text-2xl font-playfair font-bold text-chocolate-brown flex items-center gap-2">
              <Sparkles className="text-strawberry-pink" /> 3D Cake Preview
            </h2>
            <p className="text-sm text-soft-gray italic">Rotate and zoom to see your creation</p>
          </div>
          <Suspense fallback={<div className="flex items-center justify-center h-full">Baking your preview...</div>}>
            <Canvas shadows className="cursor-move">
              <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Cake3D config={config} />
              <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
              <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
            </Canvas>
          </Suspense>
        </div>

        {/* Right: Customization Panel */}
        <div className="flex flex-col h-full bg-white/80 backdrop-blur-md rounded-cake p-8 shadow-xl border border-white">
          <div className="mb-8">
             <div className="flex justify-between items-center mb-6">
                {steps.map(s => (
                  <div key={s.id} className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step === s.id ? 'bg-chocolate-brown text-white scale-110 shadow-lg' : 
                      step > s.id ? 'bg-strawberry-pink text-white' : 'bg-soft-pink/30 text-light-brown'
                    }`}>
                      {step > s.id ? <Check className="w-5 h-5" /> : s.id}
                    </div>
                  </div>
                ))}
             </div>
             <h1 className="text-3xl font-playfair font-bold text-chocolate-brown">{steps[step-1].title}</h1>
          </div>

          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {steps[step-1].options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => {
                        if (step === 5) {
                          toggleExtra(opt.id)
                        } else {
                          setConfig(prev => ({ ...prev, [steps[step-1].key]: opt.id }))
                        }
                    }}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${
                      (step === 5 ? config.extras.includes(opt.id) : config[steps[step-1].key] === opt.id)
                        ? 'border-chocolate-brown bg-cream shadow-inner' 
                        : 'border-soft-pink/20 bg-white hover:border-soft-pink'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-chocolate-brown text-lg">{opt.label}</span>
                      {(step === 5 ? config.extras.includes(opt.id) : config[steps[step-1].key] === opt.id) && <Check className="text-chocolate-brown" />}
                    </div>
                    <p className="text-sm text-soft-gray">
                      {opt.price ? `$${opt.price}` : opt.extra ? `+$${opt.extra}` : 'Included'}
                    </p>
                    {opt.color && (
                      <div className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-xl" style={{ backgroundColor: opt.color }} />
                    )}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pricing Panel */}
          <div className="mt-8 pt-6 border-t border-soft-pink/30">
             <div className="flex justify-between text-sm text-soft-gray mb-1">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm text-soft-gray mb-4">
                <span>Sales Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
             </div>
             <div className="flex justify-between items-end mb-6">
                <span className="text-lg font-bold text-chocolate-brown">Estimated Price</span>
                <span className="text-3xl font-playfair font-bold text-strawberry-pink">${total.toFixed(2)}</span>
             </div>

             <div className="flex gap-4">
               {step > 1 && (
                 <button onClick={handlePrev} className="flex-1 btn-secondary flex items-center justify-center gap-2">
                   <ChevronLeft className="w-5 h-5" /> Back
                 </button>
               )}
               {step < 5 ? (
                 <button onClick={handleNext} className="flex-1 btn-primary flex items-center justify-center gap-2">
                   Next <ChevronRight className="w-5 h-5" />
                 </button>
               ) : (
                  <button 
                    onClick={() => {
                      const finalPrice = total;
                      addToCart({
                        id: `custom-${Date.now()}`,
                        name: 'Custom Craft Cake',
                        price: finalPrice,
                        config,
                        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80'
                      });
                      navigate('/cart');
                    }}
                    className="flex-1 bg-strawberry-pink text-white px-8 py-3 rounded-full shadow-md hover:bg-chocolate-brown transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Add to Bag <ShoppingCart className="w-5 h-5" />
                  </button>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBuilder;
