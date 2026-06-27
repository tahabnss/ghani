import React from 'react';
import { X, Trash2, Plus, Minus, Tag, ShieldCheck, Ticket } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: (discount: number, promoCode: string) => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }: CartDrawerProps) {
  const [promoCode, setPromoCode] = React.useState('');
  const [appliedDiscount, setAppliedDiscount] = React.useState(0);
  const [promoError, setPromoError] = React.useState('');
  const [promoSuccess, setPromoSuccess] = React.useState('');

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'LUXE15' || code === 'NOIR15') {
      setAppliedDiscount(15);
      setPromoSuccess('Code promo de 15% appliqué avec succès !');
      setPromoError('');
    } else if (code === 'WELCOME10') {
      setAppliedDiscount(10);
      setPromoSuccess('Code promo de 10% appliqué avec succès !');
      setPromoError('');
    } else if (code === '') {
      setPromoError('Saisissez un code valide.');
      setPromoSuccess('');
    } else {
      setPromoError('Code promo non reconnu.');
      setPromoSuccess('');
    }
  };

  // Pricing math
  const itemsSubtotal = cartItems.reduce((acc, item) => {
    // Add finish multiplier
    const finishObj = item.product.finishes.find(f => f.name === item.selectedFinish);
    const finishExtra = finishObj ? finishObj.priceModifier : 0;
    return acc + (item.product.price + finishExtra) * item.quantity;
  }, 0);

  const discountAmount = Math.round((itemsSubtotal * appliedDiscount) / 100);
  const finalTotal = itemsSubtotal - discountAmount;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in flex justify-end">
      {/* Drawer Overlay backdrop */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Drawer Body container */}
      <div 
        className="relative bg-[#111111] w-full max-w-md h-full shadow-[0_0_50px_rgba(0,0,0,0.8)] border-l border-white/10 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header section */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <h3 className="font-sans text-lg font-bold text-white tracking-tight">VOTRE PANIER</h3>
            <span className="font-mono text-xs text-[#00ffd1] bg-[#00ffd1]/10 px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button 
            id="cart-drawer-close-btn"
            className="w-8 h-8 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer items list */}
        <div className="flex-grow overflow-y-auto p-6 space-y-5 no-scrollbar">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <span className="text-4xl block opacity-35">🛒</span>
              <p className="font-sans text-sm text-gray-500 font-light">Votre panier est vide pour l'instant.</p>
              <button 
                onClick={onClose}
                className="font-mono text-xs text-[#00ffd1] underline uppercase tracking-widest hover:text-white transition-colors"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            cartItems.map((item) => {
              const finishObj = item.product.finishes.find(f => f.name === item.selectedFinish);
              const finishExtra = finishObj ? finishObj.priceModifier : 0;
              const itemUnitPrice = item.product.price + finishExtra;

              return (
                <div 
                  key={item.id}
                  className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all"
                >
                  {/* Miniature Image */}
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-20 h-20 object-cover bg-black rounded border border-white/5 flex-shrink-0"
                  />

                  {/* Detail Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-sans text-xs font-semibold text-white tracking-tight truncate max-w-[150px]">
                          {item.product.name}
                        </h4>
                        <span className="font-mono text-xs text-[#00ffd1] font-semibold flex-shrink-0">
                          {itemUnitPrice * item.quantity} €
                        </span>
                      </div>
                      
                      {/* Configuration items selected */}
                      <div className="space-y-0.5 mt-1">
                        <span className="block font-sans text-[10px] text-gray-400">
                          Finition : <strong className="text-gray-300 font-medium">{item.selectedFinish}</strong>
                        </span>
                        {item.customEngraving && (
                          <span className="block font-mono text-[9px] text-[#00ffd1] bg-[#00ffd1]/5 px-1.5 py-0.5 rounded-sm inline-block border border-[#00ffd1]/15">
                            Laser: "{item.customEngraving}"
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls and remove */}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center bg-black/60 rounded px-1 py-0.5 border border-white/5">
                        <button 
                          className="w-5 h-5 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                        >
                          <Minus size={10} />
                        </button>
                        <span className="font-mono text-xs text-white font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          className="w-5 h-5 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      <button 
                        className="text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
                        onClick={() => onRemoveItem(item.id)}
                        title="Retirer du panier"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer and Checkout Area */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-[#0d0d0d] border-t border-white/10 space-y-4">
            
            {/* Promo Code section */}
            <div className="space-y-1.5">
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                <Ticket size={10} className="text-[#00ffd1]" /> Code Promo Spécial (Ex: LUXE15)
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="CODE PROMO"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs font-mono text-white placeholder-gray-700 uppercase focus:outline-none focus:border-[#00ffd1] flex-grow"
                />
                <button
                  id="promo-apply-btn"
                  onClick={handleApplyPromo}
                  className="bg-white/10 hover:bg-white text-white hover:text-black transition-colors font-mono text-xs px-3 rounded uppercase font-semibold cursor-pointer"
                >
                  Appliquer
                </button>
              </div>
              {promoError && <p className="font-sans text-[10px] text-red-400">{promoError}</p>}
              {promoSuccess && <p className="font-sans text-[10px] text-[#00ffd1]">{promoSuccess}</p>}
            </div>

            {/* Calculations breakdown */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex justify-between font-sans text-xs text-gray-400">
                <span>Sous-total</span>
                <span className="font-mono">{itemsSubtotal} €</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between font-sans text-xs text-[#00ffd1]">
                  <span>Réduction ({appliedDiscount}%)</span>
                  <span className="font-mono">-{discountAmount} €</span>
                </div>
              )}
              <div className="flex justify-between font-sans text-xs text-gray-400">
                <span>Livraison Standard</span>
                <span className="font-mono uppercase text-xs text-[#00ffd1] font-semibold">OFFERT</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                <span className="font-sans text-sm font-bold text-white">TOTAL</span>
                <span className="font-mono text-xl text-[#00ffd1] font-bold text-glow">
                  {finalTotal} €
                </span>
              </div>
            </div>

            {/* Simulated Checkout trigger */}
            <div className="space-y-2 pt-2">
              <button 
                id="cart-checkout-btn"
                onClick={() => onCheckout(appliedDiscount, promoCode)}
                className="w-full bg-[#00ffd1] hover:bg-white text-black font-semibold font-sans text-sm py-3.5 rounded flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,209,0.15)] cursor-pointer"
              >
                Passer la Commande Sécurisée
              </button>
              <div className="flex items-center justify-center gap-1.5 font-mono text-[9px] text-gray-500 uppercase">
                <ShieldCheck size={11} className="text-[#00ffd1]" /> Chiffrement SSL 256 bits
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
