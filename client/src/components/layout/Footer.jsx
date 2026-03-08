const Footer = () => {
  return (
    <footer className="bg-vanilla-beige py-12 border-t border-soft-pink">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-chocolate-brown mb-4">CakeCraft</h3>
          <p className="text-soft-gray text-sm leading-relaxed">
            Crafting memories with every slice. Premium custom cakes designed by you, baked by us.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-chocolate-brown mb-4">Shop</h4>
          <ul className="text-soft-gray text-sm space-y-2">
            <li><a href="/products" className="hover:text-strawberry-pink">All Cakes</a></li>
            <li><a href="/builder" className="hover:text-strawberry-pink">Custom Builder</a></li>
            <li><a href="#" className="hover:text-strawberry-pink">Cupcakes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-chocolate-brown mb-4">Support</h4>
          <ul className="text-soft-gray text-sm space-y-2">
            <li><a href="#" className="hover:text-strawberry-pink">Contact Us</a></li>
            <li><a href="#" className="hover:text-strawberry-pink">Delivery Info</a></li>
            <li><a href="#" className="hover:text-strawberry-pink">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-chocolate-brown mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-white border border-soft-pink px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-soft-pink text-sm" />
            <button className="bg-chocolate-brown text-white px-4 py-2 rounded-full hover:bg-light-brown transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-soft-pink/20 text-center text-soft-gray text-xs">
        © 2026 CakeCraft Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
