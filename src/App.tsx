import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle, Star, SlidersHorizontal, Heart, Plus, ShoppingBag } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import JournalSection from './components/JournalSection';
import StoryModal from './components/StoryModal';
import AboutSection from './components/AboutSection';

import { Product, CartItem, Review } from './types';
import { products, reviews, stories } from './data';

export default function App() {
  // Navigation & Look States
  const [activeSection, setActiveSection] = React.useState<'home' | 'collections' | 'journal' | 'about'>('home');
  const [backgroundTheme, setBackgroundTheme] = React.useState<'dark-noir' | 'warm-luxe'>('dark-noir');
  const [filterCategory, setFilterCategory] = React.useState<string>('all');

  // Interactive Overlays
  const [cartOpen, setCartOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [selectedStory, setSelectedStory] = React.useState<typeof stories[0] | null>(null);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);

  // Cart & Orders State Management
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [discountPercent, setDiscountPercent] = React.useState(0);
  const [appliedPromo, setAppliedPromo] = React.useState('');

  // Notification banners
  const [successToast, setSuccessToast] = React.useState('');

  // Auto-scroller anchor for shopping experience
  const collectionsRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToCollections = () => {
    setActiveSection('collections');
    setTimeout(() => {
      collectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigate = (section: 'home' | 'collections' | 'journal' | 'about') => {
    setActiveSection(section);
    if (section === 'collections') {
      setTimeout(() => {
        collectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Add Item to cart logic
  const handleAddToCart = (product: Product, qty: number, finish: string, engraving: string) => {
    const customItemId = `${product.id}-${finish.replace(/\s+/g, '')}-${engraving ? engraving.slice(0, 5) : 'none'}`;
    
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.id === customItemId);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        return [...prev, {
          id: customItemId,
          product,
          quantity: qty,
          selectedFinish: finish,
          customEngraving: engraving
        }];
      }
    });

    // Close detail modal and open Cart drawer automatically for beautiful conversion flow
    setSelectedProduct(null);
    setCartOpen(true);

    // Trigger elegant success toast
    setSuccessToast(`"${product.name}" a été ajouté au panier !`);
    setTimeout(() => setSuccessToast(''), 4000);
  };

  // Direct Quick-Add (without customization customization)
  const handleAddToCartDirect = (product: Product) => {
    handleAddToCart(product, 1, product.finishes[0].name, '');
  };

  const handleUpdateCartQty = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Trigger payments drawer
  const handleOpenCheckout = (discount: number, promo: string) => {
    setDiscountPercent(discount);
    setAppliedPromo(promo);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // Order validation clearout
  const handleOrderSuccess = () => {
    setCartItems([]);
    setDiscountPercent(0);
    setAppliedPromo('');
  };

  // Filter products list
  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  return (
    <div className="bg-[#131313] min-h-screen text-white font-sans antialiased overflow-x-hidden flex flex-col selection:bg-[#00ffd1] selection:text-black">
      
      {/* Dynamic Success Toast */}
      {successToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#1a1a1a] border border-[#00ffd1] text-white px-6 py-3 rounded shadow-[0_0_20px_rgba(0,255,209,0.3)] animate-bounce font-mono text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ffd1] animate-ping" />
          {successToast}
        </div>
      )}

      {/* Floating Header Navigation Bar */}
      <Navbar 
        onCartClick={() => setCartOpen(true)}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Render layouts based on navigation state */}
      {activeSection === 'home' && (
        <>
          {/* Hero space */}
          <Hero 
            onShopClick={handleScrollToCollections} 
            backgroundTheme={backgroundTheme}
            onChangeTheme={setBackgroundTheme}
          />
          
          {/* Aesthetic Highlights / Benefits */}
          <Benefits />

          {/* Featured collection snippet */}
          <div ref={collectionsRef} className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full border-t border-white/5 bg-[#131313]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
                  ÉCRANS & DROPS EXCLUSIFS
                </span>
                <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  La Sélection Signature
                </h2>
              </div>

              {/* Categorization filters */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'Voir Tout' },
                  { id: 'controllers', label: 'Manettes' },
                  { id: 'audio', label: 'Audio' },
                  { id: 'smart-home', label: 'Maison Intelligente' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    id={`filter-${cat.id}`}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-4 py-2 rounded-sm font-mono text-[10px] tracking-widest uppercase transition-all border cursor-pointer ${filterCategory === cat.id ? 'bg-[#00ffd1] text-black border-[#00ffd1] font-semibold' : 'text-gray-400 hover:text-white border-white/5 bg-white/5 hover:bg-white/10'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* List products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
              {filteredProducts.map((p) => (
                <ProductCard 
                  key={p.id}
                  product={p}
                  onViewDetails={setSelectedProduct}
                  onAddToCartDirect={handleAddToCartDirect}
                />
              ))}
            </div>
          </div>

          {/* Curated Editorial Journal */}
          <JournalSection onStoryClick={setSelectedStory} />
        </>
      )}

      {activeSection === 'collections' && (
        <div ref={collectionsRef} className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
                NOS COLLECTIONS COMPLÈTES
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Catalogue de Curateur
              </h2>
            </div>

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Voir Tout' },
                { id: 'controllers', label: 'Manettes' },
                { id: 'audio', label: 'Audio' },
                { id: 'smart-home', label: 'Maison Intelligente' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  id={`collections-filter-${cat.id}`}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-4 py-2 rounded-sm font-mono text-[10px] tracking-widest uppercase transition-all border cursor-pointer ${filterCategory === cat.id ? 'bg-[#00ffd1] text-black border-[#00ffd1] font-semibold' : 'text-gray-400 hover:text-white border-white/5 bg-white/5 hover:bg-white/10'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
            {filteredProducts.map((p) => (
              <ProductCard 
                key={p.id}
                product={p}
                onViewDetails={setSelectedProduct}
                onAddToCartDirect={handleAddToCartDirect}
              />
            ))}
          </div>
        </div>
      )}

      {activeSection === 'journal' && (
        <div className="pt-28">
          <JournalSection onStoryClick={setSelectedStory} />
        </div>
      )}

      {activeSection === 'about' && (
        <div className="pt-28">
          <AboutSection />
        </div>
      )}

      {/* Exquisite Footer with exclusive subscription */}
      <Footer />

      {/* Interactive Cart Drawer right panel */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleOpenCheckout}
      />

      {/* Interactive Detail configuration product modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Interactive Story reading modal */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}

      {/* Secure Apple Pay / Credit Card interactive Checkout screen */}
      <CheckoutModal 
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        discountPercent={discountPercent}
        promoCode={appliedPromo}
        onOrderSuccess={handleOrderSuccess}
      />

    </div>
  );
}
