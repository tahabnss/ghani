import React from 'react';
import { X, CreditCard, Lock, Mail, User, MapPin, CheckCircle, ArrowRight, Loader2, Award } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountPercent: number;
  promoCode: string;
  onOrderSuccess: () => void;
}

export default function CheckoutModal({ isOpen, onClose, cartItems, discountPercent, promoCode, onOrderSuccess }: CheckoutModalProps) {
  const [step, setStep] = React.useState<'form' | 'processing' | 'success'>('form');
  const [processingMessage, setProcessingMessage] = React.useState('Vérification de la sécurité...');
  
  // Form fields
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const [formErrors, setFormErrors] = React.useState('');

  if (!isOpen) return null;

  // Pricing math
  const subtotal = cartItems.reduce((acc, item) => {
    const finishObj = item.product.finishes.find(f => f.name === item.selectedFinish);
    const finishExtra = finishObj ? finishObj.priceModifier : 0;
    return acc + (item.product.price + finishExtra) * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!fullName || !email || !address || !city || !zipCode || !cardNumber || !expiry || !cvc) {
      setFormErrors('Veuillez remplir tous les champs requis.');
      return;
    }
    
    setFormErrors('');
    setStep('processing');

    // Simulate luxury processing steps
    setTimeout(() => {
      setProcessingMessage('Sécurisation de la liaison SSL...');
    }, 1000);

    setTimeout(() => {
      setProcessingMessage('Vérification de la carte de crédit...');
    }, 2000);

    setTimeout(() => {
      setProcessingMessage('Validation de la commande premium...');
    }, 3200);

    setTimeout(() => {
      setStep('success');
    }, 4500);
  };

  const handleFinish = () => {
    onOrderSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#111111] w-full max-w-4xl rounded-lg border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Close */}
        {step !== 'processing' && (
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0d0d0d]">
            <span className="font-mono text-xs text-[#00ffd1] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Lock size={12} className="text-[#00ffd1]" /> PASSERELLE SÉCURISÉE SSL
            </span>
            <button 
              id="checkout-close-btn"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Scrollable container */}
        <div className="overflow-y-auto flex-grow p-6 md:p-10">
          
          {/* STEP 1: FORM INPUTS */}
          {step === 'form' && (
            <form onSubmit={handlePay} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Column: Form Inputs */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h3 className="font-sans text-lg font-bold text-white tracking-tight mb-4">Informations de Livraison</h3>
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div className="relative">
                      <User size={14} className="absolute left-4 top-4.5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Nom Complet"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-11 py-3.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail size={14} className="absolute left-4 top-4.5 text-gray-500" />
                      <input
                        type="email"
                        placeholder="Adresse Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-11 py-3.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <MapPin size={14} className="absolute left-4 top-4.5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Adresse Postale"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-11 py-3.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        required
                      />
                    </div>

                    {/* City & Zip Code */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Ville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Code Postal"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3.5 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-sans text-lg font-bold text-white tracking-tight mb-4">Informations de Paiement</h3>
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div className="relative">
                      <CreditCard size={14} className="absolute left-4 top-4.5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Numéro de carte (4444 5555 6666 7777)"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                        className="w-full bg-white/5 border border-white/10 rounded px-11 py-3.5 font-mono text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        maxLength={19}
                        required
                      />
                    </div>

                    {/* Expiry and CVC */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM / AA"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3.5 font-mono text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        maxLength={5}
                        required
                      />
                      <input
                        type="password"
                        placeholder="CVC / CVV"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3.5 font-mono text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>

                {formErrors && <p className="font-sans text-xs text-red-400 mt-2">{formErrors}</p>}
              </div>

              {/* Right Column: Order Summary & Pay Action */}
              <div className="md:col-span-5 bg-white/5 rounded-lg border border-white/5 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Récapitulatif</h4>
                  <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 no-scrollbar border-b border-white/5 pb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-xs">
                        <div className="max-w-[70%]">
                          <span className="block text-white font-medium truncate">{item.product.name}</span>
                          <span className="block text-[10px] text-gray-500 font-light">Fin : {item.selectedFinish} x {item.quantity}</span>
                        </div>
                        <span className="font-mono text-gray-300 font-semibold">{item.product.price * item.quantity} €</span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-2 pt-4 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Sous-total</span>
                      <span className="font-mono">{subtotal} €</span>
                    </div>
                    {discountPercent > 0 && (
                      <div className="flex justify-between text-[#00ffd1]">
                        <span>Code promo appliqué</span>
                        <span className="font-mono">-{discountAmount} €</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-400">
                      <span>Frais d'expédition</span>
                      <span className="font-mono uppercase font-semibold text-[#00ffd1]">OFFERT</span>
                    </div>
                    <div className="flex justify-between text-white font-bold pt-3 border-t border-white/5 text-sm">
                      <span>TOTAL DE LA COMMANDE</span>
                      <span className="font-mono text-[#00ffd1] text-glow">{finalTotal} €</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-[#00ffd1] hover:bg-white text-black font-semibold font-sans text-sm py-4 rounded hover:scale-[1.01] transition-all cursor-pointer shadow-[0_0_20px_rgba(0,255,209,0.2)]"
                  >
                    Autoriser la transaction &bull; {finalTotal} €
                  </button>
                  <p className="font-sans text-[10px] text-gray-500 text-center mt-3 leading-tight">
                    En cliquant, vous autorisez notre passerelle de luxe à débiter votre compte de {finalTotal} €. Tous vos achats bénéficient de notre garantie satisfait ou remboursé.
                  </p>
                </div>

              </div>

            </form>
          )}

          {/* STEP 2: PROCESSING */}
          {step === 'processing' && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <Loader2 size={48} className="text-[#00ffd1] animate-spin drop-shadow-[0_0_10px_rgba(0,255,209,0.5)]" />
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-bold text-white tracking-tight">TRANSACTION EN COURS SÉCURISÉE</h3>
                <p className="font-mono text-xs text-[#00ffd1] uppercase tracking-widest text-glow">{processingMessage}</p>
              </div>
              <p className="font-sans text-xs text-gray-500 max-w-xs font-light">
                Ne rechargez pas la page. Notre réseau de paiement crypte vos informations bancaires sous un protocole AES-256.
              </p>
            </div>
          )}

          {/* STEP 3: SUCCESS & DIGITAL RECEIPT */}
          {step === 'success' && (
            <div className="py-8 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
              <CheckCircle size={56} className="text-[#00ffd1] drop-shadow-[0_0_15px_rgba(0,255,209,0.5)] mb-6 animate-pulse" />
              
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">COMMANDE ENREGISTRÉE</h3>
              <p className="font-mono text-xs text-[#00ffd1] uppercase tracking-widest mt-2">ID COMMANDE : LUXE-{Math.floor(Math.random() * 900000 + 100000)}</p>
              
              <p className="font-sans text-sm text-gray-400 mt-4 leading-relaxed font-light">
                Félicitations, <strong>{fullName}</strong> ! Votre commande d'objets technologiques d'exception a été validée. Un email de confirmation contenant votre numéro de suivi UPS Premium vient d'être envoyé à l'adresse <strong>{email}</strong>.
              </p>

              {/* Exquisite warranty banner */}
              <div className="w-full bg-white/5 rounded-lg border border-white/10 p-5 mt-8 flex gap-4 text-left items-start">
                <Award size={24} className="text-[#00ffd1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold">CERTIFICAT D'AUTHENTICITÉ</h4>
                  <p className="font-sans text-xs text-gray-300 mt-1 leading-normal font-light">
                    Chaque appareil issu de notre collection est couvert par un certificat d'authenticité numérique individuel qui sera synchronisé à l'expédition.
                  </p>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full bg-[#00ffd1] hover:bg-white text-black font-semibold font-sans text-sm py-3.5 rounded mt-8 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all cursor-pointer"
              >
                Retourner à la boutique
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
