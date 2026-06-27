import React from 'react';
import { Award, Zap, Fingerprint } from 'lucide-react';

export default function Benefits() {
  const benefitList = [
    {
      id: 'benefit-quality',
      icon: <Award size={32} className="text-[#00ffd1] drop-shadow-[0_0_8px_rgba(0,255,209,0.3)]" />,
      title: 'Qualité Sans Compromis',
      desc: 'Forgé à partir d\'alliages métalliques aérospatiaux d\'élite, garantissant une longévité éternelle et un toucher somptueux.'
    },
    {
      id: 'benefit-latency',
      icon: <Zap size={32} className="text-[#00ffd1] drop-shadow-[0_0_8px_rgba(0,255,209,0.3)]" />,
      title: 'Zéro Latence Absolue',
      desc: 'Notre puce propriétaire transmet les informations d\'entrée de manière instantanée, vous procurant un avantage absolu.'
    },
    {
      id: 'benefit-ergonomics',
      icon: <Fingerprint size={32} className="text-[#00ffd1] drop-shadow-[0_0_8px_rgba(0,255,209,0.3)]" />,
      title: 'Maîtrise Ergonomique',
      desc: 'Des contours dessinés pour épouser organiquement la main, réduisant la fatigue lors de vos longues sessions.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full border-t border-white/5 bg-[#131313]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
        {benefitList.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col items-center gap-4 group p-6 rounded-lg hover:bg-white/[0.02] transition-colors duration-300"
          >
            {/* Round Icon box */}
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00ffd1]/30 transition-colors duration-300">
              {item.icon}
            </div>
            
            <h3 className="font-sans text-base font-bold text-white tracking-tight mt-2">
              {item.title}
            </h3>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
