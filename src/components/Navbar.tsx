import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
  onNavigate: (section: 'home' | 'collections' | 'journal' | 'about') => void;
  activeSection: string;
}

export default function Navbar({ onCartClick, cartCount, onNavigate, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNav = (section: 'home' | 'collections' | 'journal' | 'about') => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/10 shadow-2xl transition-transform duration-300">
      {/* Sliding text announcement bar */}
      <div className="w-full bg-[#0a0a0a]/90 border-b border-white/5 py-1.5 overflow-hidden animate-marquee-container">
        <div className="animate-marquee-content text-[#00ffd1] font-mono text-[9px] tracking-widest uppercase">
          <span className="inline-block px-4 font-semibold">★ 4.9/5 RATED ON TRUSTADVISOR (840+ BUYER STORIES)</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">LIVRAISON EXPRESS PREMIUM OFFERTE</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">GARANTIE CERTIFIÉE DE 3 ANS</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold">SATISFAIT OU REMBOURSÉ SOUS 30 JOURS</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">ASSISTANCE CONCIERGERIE PRIVÉE 24/7</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          
          {/* Duplicate for infinite loop spacing */}
          <span className="inline-block px-4 font-semibold">★ 4.9/5 RATED ON TRUSTADVISOR (840+ BUYER STORIES)</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">LIVRAISON EXPRESS PREMIUM OFFERTE</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">GARANTIE CERTIFIÉE DE 3 ANS</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold">SATISFAIT OU REMBOURSÉ SOUS 30 JOURS</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
          <span className="inline-block px-4 font-semibold text-white">ASSISTANCE CONCIERGERIE PRIVÉE 24/7</span>
          <span className="inline-block px-4 text-white/30">&bull;</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto">
        
        {/* Mobile menu trigger */}
        <button 
          id="nav-mobile-menu-btn"
          className="md:hidden text-white hover:text-[#00ffd1] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand logo */}
        <div 
          id="nav-logo"
          className="font-sans text-xl md:text-2xl font-extrabold tracking-tighter text-white cursor-pointer select-none"
          onClick={() => handleNav('home')}
        >
          LUXE<span className="text-[#00ffd1]">.</span>DROP
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <button 
            id="nav-link-collections"
            className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-[#00ffd1] ${activeSection === 'collections' ? 'text-[#00ffd1] border-b-2 border-[#00ffd1] pb-1' : 'text-gray-400'}`}
            onClick={() => handleNav('collections')}
          >
            Collections
          </button>
          <button 
            id="nav-link-journal"
            className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-[#00ffd1] ${activeSection === 'journal' ? 'text-[#00ffd1] border-b-2 border-[#00ffd1] pb-1' : 'text-gray-400'}`}
            onClick={() => handleNav('journal')}
          >
            Journal
          </button>
          <button 
            id="nav-link-about"
            className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-[#00ffd1] ${activeSection === 'about' ? 'text-[#00ffd1] border-b-2 border-[#00ffd1] pb-1' : 'text-gray-400'}`}
            onClick={() => handleNav('about')}
          >
            À Propos
          </button>
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-5">
          <button 
            id="nav-search-btn"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <Search size={20} />
          </button>
          
          <button 
            id="nav-cart-btn"
            className="relative text-[#00ffd1] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center"
            onClick={onCartClick}
          >
            <ShoppingBag size={21} className="drop-shadow-[0_0_8px_rgba(0,255,209,0.4)]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-white text-black font-mono text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-black shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden absolute top-full left-0 w-full bg-[#131313]/95 border-b border-white/10 py-6 px-8 flex flex-col gap-5 animate-fade-in">
          <button 
            id="mobile-nav-link-collections"
            className={`font-mono text-sm tracking-widest uppercase text-left py-2 border-b border-white/5 ${activeSection === 'collections' ? 'text-[#00ffd1]' : 'text-gray-300'}`}
            onClick={() => handleNav('collections')}
          >
            Collections
          </button>
          <button 
            id="mobile-nav-link-journal"
            className={`font-mono text-sm tracking-widest uppercase text-left py-2 border-b border-white/5 ${activeSection === 'journal' ? 'text-[#00ffd1]' : 'text-gray-300'}`}
            onClick={() => handleNav('journal')}
          >
            Journal
          </button>
          <button 
            id="mobile-nav-link-about"
            className={`font-mono text-sm tracking-widest uppercase text-left py-2 border-b border-white/5 ${activeSection === 'about' ? 'text-[#00ffd1]' : 'text-gray-300'}`}
            onClick={() => handleNav('about')}
          >
            À Propos
          </button>
        </div>
      )}
    </header>
  );
}
