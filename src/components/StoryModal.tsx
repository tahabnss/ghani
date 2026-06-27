import React from 'react';
import { X, Calendar, Clock, BookOpen, Sparkles } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

interface StoryModalProps {
  story: Story;
  onClose: () => void;
}

export default function StoryModal({ story, onClose }: StoryModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="relative bg-[#111111] border border-white/10 w-full max-w-2xl rounded-lg p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          id="story-modal-close-btn"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-gray-400 hover:text-white transition-all flex items-center justify-center border border-white/10 cursor-pointer"
          onClick={onClose}
        >
          <X size={16} />
        </button>

        <div className="space-y-6">
          <div className="space-y-2 border-b border-white/5 pb-4">
            <span className="font-mono text-[9px] text-[#00ffd1] uppercase tracking-widest font-bold block">
              LUXE.DROP JOURNAL SPECIAL
            </span>
            <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white tracking-tight">
              {story.title}
            </h3>
            <p className="font-sans text-xs text-gray-400">
              {story.subtitle}
            </p>
            <div className="flex gap-4 items-center text-gray-500 font-mono text-[10px] mt-2">
              <span>{story.date}</span>
              <span>&bull;</span>
              <span>Temps de lecture : {story.readTime}</span>
            </div>
          </div>

          <p className="font-sans text-sm text-[#00ffd1] italic leading-relaxed border-l-2 border-[#00ffd1] pl-4">
            "{story.summary}"
          </p>

          <div className="font-sans text-xs text-gray-300 leading-relaxed space-y-4 font-light">
            <p>
              Dans le monde du design contemporain, les objets ne sont plus de simples utilitaires. Ils définissent notre identité, modulent notre humeur et structurent l'espace dans lequel nous vivons. Les textures lisses, les lignes minimalistes et les matériaux durables ne sont plus l'exception, mais la norme imposée par une génération d'esthètes exigeants.
            </p>
            <p>
              Notre équipe d'ingénieurs et de curateurs travaille sans relâche pour dénicher les créations les plus pures à travers le globe. Chaque pièce sélectionnée pour figurer au sein du catalogue LUXE.DROP subit une batterie de tests d'usure, de touchabilité et de résonance haptique. C'est l'essence même de notre charte d'excellence.
            </p>
            <p>
              En choisissant nos créations, vous n'achetez pas seulement un appareil de contrôle ou un système acoustique; vous faites l'acquisition d'une philosophie de vie axée sur l'essentiel et l'élégance absolue.
            </p>
          </div>

          {/* Luxury watermark badge */}
          <div className="bg-white/5 rounded border border-white/5 p-4 flex gap-3 items-center">
            <Sparkles size={16} className="text-[#00ffd1]" />
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
              Garantie d'édition limitée certifiée Luxe.Drop
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
