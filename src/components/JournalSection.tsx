import React from 'react';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { stories } from '../data';

interface JournalSectionProps {
  onStoryClick: (story: typeof stories[0]) => void;
}

export default function JournalSection({ onStoryClick }: JournalSectionProps) {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full border-t border-white/5 bg-[#131313]">
      {/* Title */}
      <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-5">
        <div>
          <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
            LECTURE DESIGN & ESTHÉTIQUE
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Le Journal LUXE.DROP
          </h2>
        </div>
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden sm:block">
          EDITION Nº IV &bull; 2026
        </span>
      </div>

      {/* Grid of stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="group bg-[#1c1b1b] border border-white/5 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-white/15 transition-all cursor-pointer h-full"
            onClick={() => onStoryClick(story)}
          >
            <div>
              {/* Meta information */}
              <div className="flex gap-4 items-center mb-4">
                <span className="font-mono text-[9px] text-[#00ffd1] uppercase tracking-widest bg-[#00ffd1]/10 px-2 py-0.5 rounded-sm">
                  Culture
                </span>
                <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
                  <Calendar size={10} /> {story.date}
                </span>
                <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
                  <Clock size={10} /> {story.readTime}
                </span>
              </div>

              {/* Headings */}
              <h3 className="font-sans text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#00ffd1] transition-colors leading-snug">
                {story.title}
              </h3>
              <p className="font-sans text-xs text-gray-400 font-light mt-1.5 leading-normal">
                {story.subtitle}
              </p>

              {/* Summary snippet */}
              <p className="font-sans text-xs text-gray-400 mt-4 leading-relaxed font-light border-l border-white/10 pl-3.5 italic">
                "{story.summary}"
              </p>
            </div>

            {/* Read action */}
            <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-6">
              <span className="font-sans text-xs font-semibold text-white group-hover:text-[#00ffd1] transition-colors">
                Lire l'article complet
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#00ffd1] group-hover:text-black text-white flex items-center justify-center transition-all">
                <ArrowUpRight size={14} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
