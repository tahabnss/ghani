import React from 'react';
import { Star, Eye, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCartDirect: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCartDirect }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-[#1c1b1b] rounded-lg border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col h-full"
    >
      {/* Product Image Stage */}
      <div className="aspect-[4/5] bg-[#0e0e0e] relative overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          src={product.image}
        />
        
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Dynamic Tag/Badge */}
        {product.tag && (
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#00ffd1] font-semibold">
              {product.tag}
            </span>
          </div>
        )}

        {/* Rating overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-sm">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="font-mono text-[10px] text-white font-medium">{product.rating}</span>
        </div>

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
          <button 
            className="w-11 h-11 rounded-full bg-black/90 hover:bg-[#00ffd1] text-white hover:text-black transition-all flex items-center justify-center shadow-lg border border-white/10 hover:scale-110 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            title="Inspecter l'objet"
          >
            <Eye size={18} />
          </button>
          <button 
            className="w-11 h-11 rounded-full bg-[#00ffd1] hover:bg-white text-black transition-all flex items-center justify-center shadow-lg hover:scale-110 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCartDirect(product);
            }}
            title="Ajouter au panier instantanément"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Product Information Footer */}
      <div className="p-5 bg-[#141414] border-t border-white/5 flex flex-col flex-grow justify-between gap-3">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-sans text-base font-semibold text-white tracking-tight hover:text-[#00ffd1] transition-colors cursor-pointer" onClick={() => onViewDetails(product)}>
              {product.name}
            </h3>
            
            {/* Currency Price Tags */}
            <div className="flex flex-col items-end">
              <span className="font-mono text-[14px] text-[#00ffd1] font-semibold tracking-wide">
                {product.price} €
              </span>
              {product.originalPrice && (
                <span className="font-mono text-[11px] text-gray-500 line-through">
                  {product.originalPrice} €
                </span>
              )}
            </div>
          </div>
          <p className="font-sans text-xs text-gray-400 mt-1 line-clamp-2 font-light">
            {product.description}
          </p>
        </div>

        {/* Detailed action bar */}
        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
            {product.category}
          </span>
          <button 
            className="font-mono text-[11px] text-[#00ffd1] hover:text-white transition-colors tracking-wider font-semibold uppercase flex items-center gap-1 cursor-pointer"
            onClick={() => onViewDetails(product)}
          >
            Personnaliser →
          </button>
        </div>
      </div>
    </div>
  );
}
