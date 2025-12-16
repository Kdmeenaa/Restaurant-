import React, { useState, useEffect } from 'react';
import { generateDailySpecial } from '../services/geminiService';
import { MapPin, Clock, Phone, FileText, X } from 'lucide-react';

export const BhojanExperience: React.FC = () => {
  const [dailySpecial, setDailySpecial] = useState("Loading today's chef selection...");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    generateDailySpecial().then(res => {
      if (res && res.text) {
        setDailySpecial(res.text);
      } else {
        setDailySpecial("Fresh seasonal vegetables served with aromatic dal and hot rotis.");
      }
    });
  }, []);

  return (
    <section id="bhojan" className="bg-cream py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block border-b-2 border-burgundy pb-1">
            <span className="text-burgundy text-sm font-bold tracking-[0.2em] uppercase">The Bhojnalaya</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-burgundy leading-tight">
            The Purity of a <br/><span className="italic text-gold">Traditional Thali</span>
          </h2>

          <p className="text-xl font-serif text-burgundy italic">
            "Ghar jaisa swad, Rajwada jaisa samman."
          </p>

          <p className="text-gray-600 leading-relaxed max-w-md">
            Step into a world where culinary heritage meets fine dining. Our Jain Thali is not just a meal; it is a meticulously curated journey through the flavors of Madhya Pradesh, served with the warmth of family.
          </p>

          {/* Daily Special Card */}
          <div className="bg-white p-8 shadow-xl border-l-4 border-gold max-w-md transform transition-all hover:scale-105 duration-300">
            <h4 className="font-serif text-2xl text-burgundy mb-2">Today's Special</h4>
            <p className="text-gray-600 italic">"{dailySpecial}"</p>
            <div className="mt-4 flex items-center text-sm text-gold font-bold uppercase tracking-wide">
              <span>Chef Recommended</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-burgundy text-cream hover:bg-burgundy-light transition-colors uppercase tracking-widest text-sm font-bold shadow-lg flex-grow sm:flex-grow-0">
              Book a Table
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="px-8 py-4 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-colors uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
            >
              <FileText size={16} /> View Menu
            </button>

            <a 
              href="https://maps.app.goo.gl/QhiYwYn6cKBuw9R47"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-colors uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        </div>

        {/* Right: Visuals */}
        <div className="relative h-[600px] w-full order-1 lg:order-2">
            {/* Main Image: Premium Vegetarian Thali */}
            <div className="absolute top-0 right-0 w-[90%] h-[80%] overflow-hidden shadow-2xl z-10 group">
               <img 
                 src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop" 
                 alt="Royal Veg Thali" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>
            {/* Secondary Image: Fresh Roti */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden shadow-2xl z-20 border-8 border-cream">
               <img 
                 src="https://images.unsplash.com/photo-1626132628469-6d5254199f79?q=80&w=800&auto=format&fit=crop" 
                 alt="Fresh Roti" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative Gold Box */}
            <div className="absolute top-10 right-10 w-[90%] h-[80%] border border-gold z-0 translate-x-4 -translate-y-4"></div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-burgundy text-cream mt-24 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <Clock className="mb-4 text-gold" size={32} />
                <h3 className="font-serif text-xl mb-1">Opening Hours</h3>
                <p className="text-white/70">11:00 AM - 11:00 PM Daily</p>
            </div>
            <div className="flex flex-col items-center border-l border-r border-white/10 px-4">
                <MapPin className="mb-4 text-gold" size={32} />
                <h3 className="font-serif text-xl mb-1">Location</h3>
                <p className="text-white/70">Near New Jain Bhojnalaya, Guna</p>
            </div>
            <div className="flex flex-col items-center">
                <Phone className="mb-4 text-gold" size={32} />
                <h3 className="font-serif text-xl mb-1">Reservations</h3>
                <p className="text-white/70">+91 98765 43210</p>
            </div>
        </div>
      </div>

      {/* Menu Modal */}
      {isMenuOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
        >
            {/* Close Button Top Right (Outside container for better mobile UX) */}
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-black/50 rounded-full"
                onClick={() => setIsMenuOpen(false)}
            >
                <X size={32} />
            </button>
            
            <div 
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded bg-cream shadow-[0_0_50px_rgba(197,160,89,0.2)]" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* 
                  REPLACE THE SRC BELOW WITH YOUR UPLOADED MENU IMAGE URL.
                  Example: src="/menu-image.jpg" or a full URL.
                */}
                <img 
                    src="https://placehold.co/800x1200/4a0404/c5a059?text=Menu+Coming+Soon" 
                    alt="Bhojnalaya Menu" 
                    className="w-full h-auto block"
                />
                
                {/* Helper text for the user to replace the image */}
                <div className="text-center p-4 bg-burgundy text-gold text-xs uppercase tracking-widest">
                    Scroll to view full menu
                </div>
            </div>
        </div>
      )}
    </section>
  );
};