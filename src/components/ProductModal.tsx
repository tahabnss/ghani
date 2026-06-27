import React from 'react';
import { X, Star, Check, Plus, Minus, Shield, Award, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, finish: string, engraving: string) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'specs' | 'reviews'>('overview');
  const [selectedFinish, setSelectedFinish] = React.useState(product.finishes[0]);
  const [customEngraving, setCustomEngraving] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [copiedReviewId, setCopiedReviewId] = React.useState<string | null>(null);

  // Live total calculation based on finishes and quantities
  const extraCost = selectedFinish.priceModifier;
  const unitPriceWithAddons = product.price + extraCost;
  const totalCost = unitPriceWithAddons * quantity;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedFinish.name, customEngraving);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Outer container */}
      <div 
        className="relative bg-[#131313] w-full max-w-5xl rounded-lg border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Close button */}
        <button 
          id="product-modal-close-btn"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-gray-400 hover:text-white transition-all flex items-center justify-center border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto flex-grow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Side: Dynamic Image Canvas & Customizer Live Preview */}
            <div className="md:col-span-6 flex flex-col gap-6">
              <div className="relative aspect-[4/5] bg-[#0d0d0d] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center group shadow-inner">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.image}
                />
                
                {/* Simulated Custom Laser Engraving Overlay! Breathtaking interactive detail */}
                {customEngraving && (
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 py-2 border border-[#00ffd1]/30 rounded-sm shadow-lg text-center backdrop-blur-sm pointer-events-none select-none max-w-[80%]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#00ffd1] font-semibold text-glow block">
                      GRAVURE LASER ACTIVED
                    </span>
                    <span className="font-mono text-sm tracking-widest text-white/90 block mt-1 break-all uppercase">
                      " {customEngraving} "
                    </span>
                  </div>
                )}

                {/* Aesthetic Theme Sparkle Indicator */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={10} className="text-[#00ffd1]" /> Custom Craft
                  </span>
                </div>
              </div>

              {/* Quick specs snippet */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/5 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500">Matière</span>
                  <span className="block font-sans text-xs font-semibold text-white mt-1 truncate">Alliage spatial</span>
                </div>
                <div className="border-x border-white/5">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500">Garantie</span>
                  <span className="block font-sans text-xs font-semibold text-white mt-1">Éternelle (2 ans)</span>
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500">Latence</span>
                  <span className="block font-sans text-xs font-semibold text-white mt-1">Zéro fil (0.8ms)</span>
                </div>
              </div>
            </div>

            {/* Right Side: Options, Interactive Configurator & Description */}
            <div className="md:col-span-6 flex flex-col justify-between">
              
              {/* Product title and subtitle */}
              <div className="border-b border-white/10 pb-6">
                <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-semibold block mb-2">
                  {product.category} &bull; Curated Dropship
                </span>
                <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h2>
                
                {/* Star rating and reviews count */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-yellow-400" : "opacity-30"} />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-gray-400 font-medium">
                    {product.rating} &bull; {product.reviewsCount} avis vérifiés
                  </span>
                </div>
              </div>

              {/* TABS (Overview, Specs, Reviews) */}
              <div className="mt-6">
                <div className="flex border-b border-white/5 gap-6">
                  <button 
                    className={`font-sans text-sm pb-2 font-medium transition-colors cursor-pointer ${activeTab === 'overview' ? 'text-white border-b-2 border-[#00ffd1]' : 'text-gray-500 hover:text-white'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Vue d'ensemble
                  </button>
                  <button 
                    className={`font-sans text-sm pb-2 font-medium transition-colors cursor-pointer ${activeTab === 'specs' ? 'text-white border-b-2 border-[#00ffd1]' : 'text-gray-500 hover:text-white'}`}
                    onClick={() => setActiveTab('specs')}
                  >
                    Spécifications
                  </button>
                  <button 
                    className={`font-sans text-sm pb-2 font-medium transition-colors cursor-pointer ${activeTab === 'reviews' ? 'text-white border-b-2 border-[#00ffd1]' : 'text-gray-500 hover:text-white'}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Avis clients
                  </button>
                </div>

                {/* Tab contents */}
                <div className="py-5 min-h-[160px] max-h-[250px] overflow-y-auto pr-2 no-scrollbar">
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        {product.longDescription}
                      </p>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-gray-300">
                            <Check size={12} className="text-[#00ffd1] mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="space-y-2.5">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <div key={idx} className="flex justify-between py-2 border-b border-white/5">
                          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{key}</span>
                          <span className="font-sans text-xs text-white font-medium text-right max-w-[60%]">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-4">
                      <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-start">
                        <Award size={16} className="text-[#00ffd1] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-sans text-[11px] text-[#00ffd1] font-semibold tracking-wider uppercase">PROGRAMME VERIFIED EXCELLENCE</p>
                          <p className="font-sans text-[11px] text-gray-400 mt-0.5 leading-tight font-light">Chaque avis provient d'un acheteur certifié LUXE.DROP ayant importé cet objet.</p>
                        </div>
                      </div>

                      {/* Mock dynamic reviews */}
                      <div className="space-y-3">
                        <div className="p-3 bg-white/5 rounded border border-white/5">
                          <div className="flex justify-between">
                            <span className="font-mono text-xs text-white font-semibold">Jean-Christophe G.</span>
                            <span className="font-mono text-[10px] text-gray-500">14 Juin 2026</span>
                          </div>
                          <div className="flex text-yellow-400 gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400" />)}
                          </div>
                          <p className="font-sans text-xs text-gray-300 mt-2 font-light">"Sublime. L'objet a un poids d'une inertie fantastique. La sensation du métal brossé sous les doigts est unique. Vraiment haut de gamme."</p>
                        </div>

                        <div className="p-3 bg-white/5 rounded border border-white/5">
                          <div className="flex justify-between">
                            <span className="font-mono text-xs text-white font-semibold">Stéphane B.</span>
                            <span className="font-mono text-[10px] text-gray-500">28 Mai 2026</span>
                          </div>
                          <div className="flex text-yellow-400 gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400" />)}
                          </div>
                          <p className="font-sans text-xs text-gray-300 mt-2 font-light">"Emballage luxueux digne d'une montre de collection suisse. L'appareil s'allume avec un bip haptique feutré superbe. Je recommande vivement."</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CONFIGURATOR SECTION */}
              <div className="border-t border-white/10 pt-6 space-y-6">
                
                {/* Choice 1: Selected Finish (Increments price dynamic) */}
                <div>
                  <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-3">
                    Étape 1 : Sélectionner la Finition Métallique
                  </span>
                  <div className="flex gap-4">
                    {product.finishes.map((finish) => (
                      <button
                        key={finish.name}
                        className={`flex items-center gap-2 px-3 py-2 bg-[#1c1b1b] border rounded-sm transition-all cursor-pointer ${selectedFinish.name === finish.name ? 'border-[#00ffd1] shadow-[0_0_15px_rgba(0,255,209,0.15)]' : 'border-white/5 hover:border-white/20'}`}
                        onClick={() => setSelectedFinish(finish)}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-white/20 block" 
                          style={{ backgroundColor: finish.hex }}
                        />
                        <div className="text-left">
                          <span className="block font-sans text-xs font-semibold text-white">{finish.name}</span>
                          <span className="block font-mono text-[9px] text-gray-400 mt-0.5">
                            {finish.priceModifier === 0 ? 'Inclus' : `+${finish.priceModifier} €`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Choice 2: Custom Laser Engraving (Micro interaction) */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                      Étape 2 : Gravure Laser Exclusive (+20 € OFFERT)
                    </span>
                    <span className="font-mono text-[9px] text-gray-500">
                      {12 - customEngraving.length} car. restants
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Saisissez vos initiales ou un mot..."
                    value={customEngraving}
                    onChange={(e) => setCustomEngraving(e.target.value.slice(0, 12))}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                  />
                  <span className="font-sans text-[10px] text-gray-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={10} className="text-gray-500" />
                    Gravé avec précision par faisceau de CO2 sur le châssis arrière de l'appareil.
                  </span>
                </div>

                {/* Quantity, Real-time Subtotal and Add To Cart */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  
                  {/* Quantity selector */}
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-sm px-1.5 py-1">
                    <button 
                      className="w-7 h-7 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-mono text-sm text-white font-bold w-10 text-center">
                      {quantity}
                    </span>
                    <button 
                      className="w-7 h-7 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Pricing dynamic calculation */}
                  <div className="text-right">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest leading-none">TOTAL UNITAIRE</span>
                    <span className="block font-mono text-lg text-white font-semibold mt-1">
                      {unitPriceWithAddons} €
                    </span>
                  </div>

                  {/* Add action */}
                  <button 
                    id="add-to-cart-action-btn"
                    onClick={handleAddToCart}
                    className="flex-grow md:flex-grow-0 bg-[#00ffd1] hover:bg-white text-black font-semibold font-sans text-sm py-3.5 px-8 rounded-sm hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,209,0.2)] cursor-pointer"
                  >
                    Ajouter au Panier &bull; {totalCost} €
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
