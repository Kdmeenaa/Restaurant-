import React from 'react';
import { Header } from './components/Header';
import { NamkeenShowcase } from './components/NamkeenShowcase';
import { BhojanExperience } from './components/BhojanExperience';
import { ArrowDown } from 'lucide-react';

function App() {
  return (
    <div className="bg-burgundy min-h-screen text-cream overflow-x-hidden selection:bg-gold selection:text-burgundy">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Parallax layer would go here - simplified for React/Tailwind */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-transparent to-burgundy"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-gold font-sans uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-pulse">
            Since 1985
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-cream mb-8 leading-tight drop-shadow-2xl">
            The Signature Spice <br /> 
            <span className="italic text-gold">of Guna</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a 
              href="#namkeen-shop"
              className="px-10 py-4 bg-gold text-burgundy font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              Shop Namkeen
            </a>
            <a 
              href="#bhojan"
              className="px-10 py-4 border border-cream text-cream font-bold uppercase tracking-widest text-sm hover:bg-cream hover:text-burgundy transition-all duration-300"
            >
              Experience Bhojan
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gold/50" size={32} />
        </div>
      </section>

      {/* Priority 1: Namkeen */}
      <NamkeenShowcase />

      {/* Priority 2: Bhojan */}
      <BhojanExperience />

      {/* Heritage / About */}
      <section id="heritage" className="py-24 bg-[#1a1a1a] relative">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-gold uppercase tracking-[0.2em] text-sm">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream mt-4 mb-8">From a Small Shop to a Legacy of Taste</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              It started with a single recipe for Sev. Today, Jhagar is synonymous with the culinary identity of Guna. 
              We bridge the gap between the fiery crunch of our Namkeen and the soulful satisfaction of our Bhojnalaya.
              Whether you are taking a box home or sitting down for a meal, you are part of our family.
            </p>
         </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white/60 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-gold font-serif text-2xl mb-6">JHAGAR</h3>
            <p className="text-sm">Authentic flavors of Guna, delivered to your doorstep and served at our table.</p>
          </div>

          <div>
             <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Shop</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="hover:text-gold">All Namkeen</a></li>
               <li><a href="#" className="hover:text-gold">Gift Bundles</a></li>
               <li><a href="#" className="hover:text-gold">Bulk Orders</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Restaurant</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="hover:text-gold">Menu</a></li>
               <li><a href="#" className="hover:text-gold">Table Booking</a></li>
               <li><a href="#" className="hover:text-gold">Private Catering</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <p className="text-sm mb-2">New Jain Bhojnalaya, Guna</p>
            <p className="text-sm mb-2">Madhya Pradesh, 473105</p>
            <a href="https://wa.me/916263265376" target="_blank" rel="noopener noreferrer" className="text-sm text-gold mt-4 hover:underline block">+91 62632 65376</a>
            <p className="text-sm text-white/40 mt-1">support@jhagar.com</p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Jhagar G-Namkeen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/916263265376"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white/10"
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.026 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.579.73-.71.88-.131.15-.262.169-.486.056-.224-.113-.945-.348-1.8-1.113-.667-.595-1.117-1.329-1.248-1.554-.131-.225-.014-.346.099-.458.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374.075-.15.038-.281-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.376-.504-.383-.131-.006-.281-.006-.431-.006-.15 0-.393.056-.599.28-.206.225-.787.769-.787 1.876 0 1.106.805 2.174.917 2.323.112.15 1.584 2.419 3.838 3.392.536.232.954.37 1.279.473.535.17.1023.146 1.486.088.523-.066 1.611-.659 1.838-1.294.227-.636.227-1.18.159-1.294-.068-.112-.254-.18-.479-.292" />
        </svg>
      </a>
    </div>
  );
}

export default App;