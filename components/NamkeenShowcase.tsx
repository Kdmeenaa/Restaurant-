import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { SpiceMeter } from './SpiceMeter';
import { generateProductDescription } from '../services/geminiService';
import { ShoppingBag, X, ZoomIn } from 'lucide-react';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ratlam Sev Royale',
    description: 'Crispy gram flour noodles spiced with black pepper and cloves.',
    price: 350,
    spiceLevel: 4,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop', // High definition Sev texture
    tagline: 'The Signature Spice'
  },
  {
    id: '2',
    name: 'Khatta Meetha Mixture',
    description: 'The legendary sweet and sour blend. Golden sev, crunchy peanuts, and hints of fruitiness.',
    price: 420,
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop', // Authentic Vegetarian Mixture (Namkeen)
    tagline: 'Sweet & Tangy Legend'
  },
  {
    id: '3',
    name: 'Royal Samosa',
    description: 'Golden fried pastry filled with spiced potatoes and peas.',
    price: 40,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop', // Crisp Golden Samosa
    tagline: 'Crispy Delight'
  }
];

export const NamkeenShowcase: React.FC = () => {
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Refs for parallax elements
  const sectionRef = useRef<HTMLElement>(null);
  const bgBlobRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    PRODUCTS.forEach(async (product) => {
      const desc = await generateProductDescription(product.name);
      // Only update if we successfully got a description from AI.
      // Otherwise, the UI will fall back to product.description.
      if (desc && desc.text) {
        setDescriptions(prev => ({ ...prev, [product.id]: desc.text }));
      }
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Check if section is somewhat in view
      if (scrollY + viewportHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        const relativeScroll = scrollY - sectionTop;
        const progress = relativeScroll / sectionHeight; // 0 to 1 approx

        // 1. Background Blob Parallax (Moves slowly)
        if (bgBlobRef.current) {
          bgBlobRef.current.style.transform = `translate3d(0, ${relativeScroll * 0.2}px, 0)`;
        }

        // 2. Title Parallax (Moves slightly to separate from background)
        if (titleRef.current) {
          titleRef.current.style.transform = `translate3d(0, ${relativeScroll * -0.1}px, 0)`;
        }

        // 3. Staggered Cards (The 3D feel)
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          // Middle card moves faster (appears closer) or slower (appears further).
          let speed = 0;
          if (index === 0) speed = 0.05; // Left
          if (index === 1) speed = -0.08; // Center (moves up/faster)
          if (index === 2) speed = 0.05; // Right

          card.style.transform = `translate3d(0, ${relativeScroll * speed}px, 0)`;
        });

        // 4. Floating Particles (Foreground, move fast)
        particlesRef.current.forEach((particle, index) => {
          if (!particle) return;
          const speed = (index + 1) * 0.15;
          particle.style.transform = `translate3d(0, ${relativeScroll * -speed}px, 0)`;
        });
      }
    };

    const loop = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(loop);
    };
    
    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="namkeen-shop" 
      className="bg-burgundy py-32 px-6 md:px-12 relative overflow-hidden perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Layers */}
      
      {/* Deep Background Blob */}
      <div 
        ref={bgBlobRef}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy-light rounded-full mix-blend-screen filter blur-[80px] opacity-30 will-change-transform z-0"
      ></div>

      {/* Floating Foreground Particles (Spice Dust) */}
      <div 
        ref={el => { particlesRef.current[0] = el; }}
        className="absolute top-[20%] left-[10%] w-4 h-4 bg-gold rounded-full filter blur-[2px] opacity-60 z-30 will-change-transform pointer-events-none"
      ></div>
      <div 
        ref={el => { particlesRef.current[1] = el; }}
        className="absolute top-[40%] right-[15%] w-6 h-6 bg-burgundy-light border border-gold rounded-full filter blur-[1px] opacity-40 z-30 will-change-transform pointer-events-none"
      ></div>
      <div 
        ref={el => { particlesRef.current[2] = el; }}
        className="absolute bottom-[20%] left-[20%] w-3 h-3 bg-gold rounded-full filter blur-[1px] opacity-50 z-30 will-change-transform pointer-events-none"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-24 space-y-4 will-change-transform">
          <h2 className="text-4xl md:text-7xl font-serif text-cream drop-shadow-xl">The Namkeen Collection</h2>
          <p className="text-gold italic font-serif text-xl tracking-wide">
            "Har daane mein Guna ki mitti ki khushboo aur Jhagar ka vishwas."
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              ref={el => { cardsRef.current[index] = el; }}
              className={`group relative will-change-transform ${index === 1 ? 'md:-mt-12' : ''}`} // Static offset for middle card
            >
              {/* Card Container with Glassmorphism & 3D Hover */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#2a0606] to-[#1a0202] border border-[#6d1010] p-6 transition-all duration-700 ease-out hover:-translate-y-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-gold/30 rounded-sm">
                
                {/* Image Area with Zoom */}
                <div 
                  className="aspect-square w-full mb-6 overflow-hidden bg-black/20 rounded-sm relative cursor-pointer group/image"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity transform scale-75 group-hover/image:scale-100 drop-shadow-lg" size={40} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"></div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  {/* Floating Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/10 transition-transform duration-500 group-hover:translate-x-1 pointer-events-none">
                    <span className="text-xs text-gold font-bold tracking-widest uppercase">{product.tagline}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-20">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif text-cream group-hover:text-gold transition-colors duration-300">{product.name}</h3>
                    <span className="text-gold font-bold font-sans text-lg">₹{product.price}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed h-20 overflow-hidden font-light">
                    {descriptions[product.id] || product.description}
                  </p>

                  <SpiceMeter level={product.spiceLevel} />

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-4">
                    <button className="flex items-center text-cream hover:text-gold transition-colors text-sm uppercase tracking-widest font-bold group/btn">
                      Add to Cart
                      <ShoppingBag className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale CTA */}
        <div className="mt-32 text-center relative z-10">
           <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-burgundy transition-all duration-300 uppercase tracking-[0.2em] text-sm font-bold shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]">
             View All Collections
           </button>
           <p className="mt-8 text-white/30 text-xs tracking-widest uppercase">
             Bulk Orders? <a href="#contact" className="text-gold underline hover:text-white transition-colors">Contact Distributors</a>
           </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[70] p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Product Detail" 
            className="max-w-full max-h-[85vh] object-contain rounded shadow-[0_0_50px_rgba(197,160,89,0.2)] animate-in zoom-in-95 duration-300 select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};