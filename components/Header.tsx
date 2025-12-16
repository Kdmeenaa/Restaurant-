import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-burgundy/95 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Left Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#namkeen-shop" className="text-cream/80 hover:text-gold uppercase text-xs tracking-[0.2em] transition-colors">Shop Namkeen</a>
          <a href="#heritage" className="text-cream/80 hover:text-gold uppercase text-xs tracking-[0.2em] transition-colors">Our Heritage</a>
        </nav>

        {/* Logo Center */}
        <div className="text-center mx-auto md:mx-0">
          <h1 className="font-serif text-3xl md:text-4xl text-gold tracking-tighter">
            JHAGAR
          </h1>
          <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.4em] text-cream block mt-1">
            G-Namkeen & Bhojan
          </span>
        </div>

        {/* Right Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#bhojan" className="text-cream/80 hover:text-gold uppercase text-xs tracking-[0.2em] transition-colors">The Bhojnalaya</a>
          <a href="#contact" className="text-cream/80 hover:text-gold uppercase text-xs tracking-[0.2em] transition-colors">Contact</a>
          <button className="text-gold hover:text-white transition-colors">
            <ShoppingBag size={20} />
          </button>
        </nav>

        {/* Mobile Cart (Right) */}
        <button className="md:hidden text-gold">
           <ShoppingBag size={20} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-burgundy border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden shadow-2xl">
          <a href="#namkeen-shop" onClick={() => setIsMenuOpen(false)} className="text-cream hover:text-gold font-serif text-xl">Shop Namkeen</a>
          <a href="#bhojan" onClick={() => setIsMenuOpen(false)} className="text-cream hover:text-gold font-serif text-xl">The Bhojnalaya</a>
          <a href="#heritage" onClick={() => setIsMenuOpen(false)} className="text-cream hover:text-gold font-serif text-xl">Heritage</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-cream hover:text-gold font-serif text-xl">Contact</a>
        </div>
      )}
    </header>
  );
};
