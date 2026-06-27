import React from 'react';
import { Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white/5 py-16 px-6 md:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Area: Branding details */}
        <div className="md:col-span-4 flex flex-col gap-5 items-center md:items-start text-center md:text-left">
          <div className="font-sans text-2xl font-extrabold tracking-tighter text-white">
            LUXE<span className="text-[#00ffd1]">.</span>DROP
          </div>
          <p className="font-sans text-xs text-gray-400 max-w-xs leading-relaxed font-light">
            Établir le futur de la technologie esthétique de luxe. Nous découvrons, sélectionnons et importons des objets d'exception pour sublimer votre environnement.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-500 uppercase">
            <ShieldCheck size={11} className="text-[#00ffd1]" /> Revendeur officiel agréé
          </div>
        </div>

        {/* Middle Area: Curated links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Boutique</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Obsidian Collection</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Audio Acoustique</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Smart Living Terminals</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Exclusivités Limitées</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Assistance</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Suivi de Colis Express</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Politique de Retour</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Nous Contacter</a></li>
            </ul>
          </div>
        </div>

        {/* Right Area: Luxury Private Circle newsletter signup */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">LE CERCLE PRIVÉ</h4>
          <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
            Inscrivez-vous pour être invité en priorité aux futurs drops technologiques en quantité ultra-limitée.
          </p>
          
          {subscribed ? (
            <div className="p-3.5 bg-[#00ffd1]/5 border border-[#00ffd1]/20 rounded flex items-start gap-3 text-left">
              <CheckCircle2 size={16} className="text-[#00ffd1] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-mono text-[10px] text-[#00ffd1] font-bold uppercase tracking-widest">INVITATION SÉCURISÉE</span>
                <p className="font-sans text-[11px] text-gray-300 mt-0.5">Votre email a été ajouté à la liste d'accès anticipé de luxe.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border border-white/10 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Votre adresse email privée..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-700 font-sans focus:outline-none flex-grow"
                required
              />
              <button 
                type="submit"
                className="bg-white hover:bg-[#00ffd1] text-black transition-colors px-4 flex items-center justify-center cursor-pointer"
                title="S'inscrire au cercle"
              >
                <Send size={12} />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Under footer lines */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <span className="font-mono text-[10px] text-gray-500">
          © {new Date().getFullYear()} LUXE.DROP. TOUS DROITS RÉSERVÉS. SÉLECTION CRÉATIVE POUR L'ÉLITE DU DESIGN.
        </span>
        <span className="font-mono text-[9px] text-gray-500 flex items-center gap-1">
          Façonné avec <Heart size={10} className="text-[#00ffd1]" /> pour les esthètes modernes.
        </span>
      </div>
    </footer>
  );
}
