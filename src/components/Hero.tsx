import React from 'react';
import { ArrowRight, Truck, ShieldCheck, Sparkles, Moon, Sun } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  backgroundTheme: 'dark-noir' | 'warm-luxe';
  onChangeTheme: (theme: 'dark-noir' | 'warm-luxe') => void;
}

export default function Hero({ onShopClick, backgroundTheme, onChangeTheme }: HeroProps) {
  const backgrounds = {
    'dark-noir': {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsJIt-u25zR9SlU6mLRHPO-x219Bc1n2QdOY7Beg7W0nydc7azOSowxGlI6oFJJP04npRaZTyDU3xIuaUjAEiiwWTmwt78t099JVdfw53oOZbFCfTH9VMb5zvSLIMfgallNPFUHKkd4Dub1IPDhmk54abEMoRYWvYljOd90r1LZAErVU8OHNaB5lwfHpp_Xp7Gp_WG13tE5_1TykRk1MAaPKcEU3N5ojfD0G2iSao3JcK0dlmgvptjAY4Xfjz0iz7he5nUSjg4_tI',
      subtitle: 'La perfection technologique sous un prisme ténébreux.',
      glowClass: 'text-glow',
      pillText: 'THE OBSIDIAN EDITION',
      accentColor: '#00ffd1'
    },
    'warm-luxe': {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLbEHSr9nsnG2vZ4CETn-DqqC5h9t6V56IREsSJ2pdh8OKKlh79zdfl6EN7EWGqz3GXXFoRAUfdc2kXoy2fXSCL-t9m5wp2IZA-qRLYzk_URONR5BiI52htGg8ybTYwHIKp2XdwDwyLWhoLfbSmnjNDSAwNBldLunIUDYW2h_KMizipUopu1K174AfoQpXWxUyT1mKMpcKypqIZdYzstOEjfSZS6WH7KIEMUB50Q7852UQcZCIcc6wOzIHbMMvkwlPm7lCyZB3fN4',
      subtitle: 'Une harmonie silencieuse pour intérieurs contemporains.',
      glowClass: 'text-glow-orange',
      pillText: 'AURA HOME HARMONY',
      accentColor: '#f97316'
    }
  };

  const currentBg = backgrounds[backgroundTheme];

  return (
    <section className="relative w-full h-[100svh] flex flex-col justify-end overflow-hidden pb-12 px-6 md:px-16 pt-[115px]">
      {/* Background with zoom effect */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Luxury dropshipping catalog high-end technology background" 
          className="w-full h-full object-cover opacity-65 transition-all duration-1000 ease-out transform scale-100"
          src={currentBg.image}
        />
        {/* Dark radial gradient overlay for cinema feeling */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/55 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/40 to-[#131313]/40"></div>
      </div>

      {/* Background Look Selector - Exquisite interaction for customers */}
      <div className="absolute top-32 right-6 md:right-16 z-20 flex bg-black/50 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
        <button
          id="btn-theme-dark-noir"
          onClick={() => onChangeTheme('dark-noir')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all ${backgroundTheme === 'dark-noir' ? 'bg-[#00ffd1] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
          title="Thème Obsidian Noir"
        >
          <Moon size={11} />
          Obsidian
        </button>
        <button
          id="btn-theme-warm-luxe"
          onClick={() => onChangeTheme('warm-luxe')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all ${backgroundTheme === 'warm-luxe' ? 'bg-orange-500 text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
          title="Thème Aura Chaleureux"
        >
          <Sun size={11} />
          Aura
        </button>
      </div>

      {/* Floating Sparkles accent */}
      <div className="absolute top-1/3 left-1/4 animate-pulse opacity-40">
        <Sparkles size={28} className="text-[#00ffd1]" />
      </div>

      {/* Main hero contents */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Premium badge */}
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 animate-bounce">
          <span className="font-mono text-[11px] text-[#00ffd1] uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ffd1] animate-ping"></span>
            {currentBg.pillText}
          </span>
        </div>

        {/* Cinematic headline */}
        <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
          REDEFINE YOUR <br className="hidden sm:block"/>
          <span className={`${currentBg.glowClass} text-[#00ffd1] transition-all duration-500`}>EVERYDAY.</span>
        </h1>
        
        <p className="font-sans text-sm md:text-xl text-gray-300 max-w-xl font-light">
          {currentBg.subtitle} Des objets technologiques d'exception conçus pour le minimaliste moderne.
        </p>

        {/* CTA Section */}
        <div className="mt-4 flex flex-col items-center gap-5 w-full max-w-xs">
          <button 
            id="hero-shop-now-btn"
            onClick={onShopClick}
            className="w-full bg-[#00ffd1] hover:bg-[#00ffd1]/90 text-black font-semibold font-sans text-sm py-4 px-8 rounded-sm flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_25px_rgba(0,255,209,0.35)] hover:shadow-[0_0_35px_rgba(0,255,209,0.5)] cursor-pointer"
          >
            Découvrir la Collection
            <ArrowRight size={16} />
          </button>

          {/* Luxury benefits indicator */}
          <div className="flex gap-6 mt-2 opacity-80">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
              <Truck size={13} className="text-[#00ffd1]" /> 
              Livraison Express
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
              <ShieldCheck size={13} className="text-[#00ffd1]" /> 
              Paiement Sécurisé
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
