import React from 'react';
import { Award, Compass, ShieldCheck, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full bg-[#131313] text-left">
      {/* Title */}
      <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-5">
        <div>
          <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
            NOTRE ESSENCE ET HISTOIRE
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            À Propos de LUXE.DROP
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Paragraphs */}
        <div className="space-y-6">
          <h3 className="font-sans text-lg font-bold text-white tracking-tight">
            Sublimer l'ordinaire par des chefs-d'œuvre technologiques.
          </h3>
          <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
            LUXE.DROP est né d'un constat simple : la plupart des objets technologiques modernes manquent d'âme. Ils sont produits en masse, enveloppés dans des plastiques bon marché et conçus pour être rapidement remplacés. Nous avons choisi une voie radicalement différente.
          </p>
          <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
            Chaque objet que nous sélectionnons ou fabriquons est une célébration du minimalisme et du raffinement technique. De l'aluminium brossé CNC de notre système audio au marbre véritable d'Italie de notre terminal intelligent, nous n'utilisons que des matériaux nobles capables de vieillir avec grâce.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-white/5 border border-white/5 rounded">
              <span className="block font-mono text-xl text-[#00ffd1] font-bold">100%</span>
              <span className="block font-sans text-[10px] text-gray-400 uppercase tracking-wider mt-1">Matériaux Premium</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded">
              <span className="block font-mono text-xl text-[#00ffd1] font-bold">24/7</span>
              <span className="block font-sans text-[10px] text-gray-400 uppercase tracking-wider mt-1">Support Conciergerie</span>
            </div>
          </div>
        </div>

        {/* Brand core values list */}
        <div className="bg-[#1c1b1b] p-8 rounded-lg border border-white/5 space-y-6">
          <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">NOS ENGAGEMENTS</h4>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00ffd1]/10 border border-[#00ffd1]/20 flex items-center justify-center text-[#00ffd1] flex-shrink-0">
              <Compass size={18} />
            </div>
            <div>
              <h5 className="font-sans text-sm font-semibold text-white">Sourcing Éthique de Luxe</h5>
              <p className="font-sans text-xs text-gray-400 font-light mt-1">
                Nous trions méticuleusement nos partenaires industriels mondiaux pour garantir des conditions de travail parfaites et une empreinte carbone compensée.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00ffd1]/10 border border-[#00ffd1]/20 flex items-center justify-center text-[#00ffd1] flex-shrink-0">
              <Award size={18} />
            </div>
            <div>
              <h5 className="font-sans text-sm font-semibold text-white">Éditions Ultra Limités</h5>
              <p className="font-sans text-xs text-gray-400 font-light mt-1">
                Pour préserver l'exclusivité de nos produits, chaque collection est importée en petites séries. Une fois épuisé, l'objet ne revient jamais.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00ffd1]/10 border border-[#00ffd1]/20 flex items-center justify-center text-[#00ffd1] flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h5 className="font-sans text-sm font-semibold text-white">Livraison Sous Haute Sécurité</h5>
              <p className="font-sans text-xs text-gray-400 font-light mt-1">
                Toutes nos expéditions sont emballées à la main dans des coffrets rembourrés anti-chocs et expédiées via transporteurs premium (UPS/FedEx) avec signature requise.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
