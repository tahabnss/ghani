import React from 'react';
import { Star, ShieldCheck, PenTool, CheckCircle, MessageSquare } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  initialReviews: Review[];
}

export default function ReviewsSection({ initialReviews }: ReviewsSectionProps) {
  const [reviewsList, setReviewsList] = React.useState<Review[]>(initialReviews);
  
  // Submit review form state
  const [author, setAuthor] = React.useState('');
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  // Spotlight mouse tracker on the review cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: Review = {
        id: `r-local-${Date.now()}`,
        author,
        rating,
        date: "Aujourd'hui",
        comment,
        verified: true
      };

      setReviewsList(prev => [newReview, ...prev]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setAuthor('');
      setComment('');
      setRating(5);

      // Fade out success notification after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full border-t border-white/5 bg-[#131313] text-left">
      
      {/* Title with Trustadvisor badge */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/5 pb-5 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
            RETROURS DE NOTRE CERCLE PRIVÉ
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Témoignages & Évaluations
          </h2>
        </div>

        {/* trustadvisor widget badge */}
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded px-4 py-2.5">
          <div className="flex text-[#00ffd1] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-[#00ffd1]" />
            ))}
          </div>
          <div className="h-5 w-px bg-white/10" />
          <div className="text-left leading-none">
            <span className="block font-mono text-[11px] text-[#00ffd1] font-bold uppercase tracking-wider">
              TRUSTADVISOR 4.9 / 5
            </span>
            <span className="block font-sans text-[9px] text-gray-500 mt-0.5 uppercase tracking-widest">
              840+ Acheteurs Vérifiés
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column: List of dynamic verified reviews */}
        <div className="lg:col-span-8 space-y-5 max-h-[640px] overflow-y-auto pr-3 no-scrollbar">
          {reviewsList.map((rev) => (
            <div 
              key={rev.id}
              onMouseMove={handleMouseMove}
              className="p-6 bg-[#1a1919] border border-white/5 rounded-lg flex flex-col justify-between hover:border-white/15 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 card-glow-spotlight relative"
            >
              {/* Header inside review card */}
              <div className="flex justify-between items-start gap-4 z-10 relative">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm font-bold text-white">
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <span className="font-mono text-[8px] bg-[#00ffd1]/10 text-[#00ffd1] border border-[#00ffd1]/20 px-1.5 py-0.5 rounded-sm uppercase tracking-wider flex items-center gap-1">
                        <ShieldCheck size={9} /> Vérifié
                      </span>
                    )}
                  </div>
                  
                  {/* Stars list */}
                  <div className="flex text-[#00ffd1] gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={10} 
                        className={i < rev.rating ? "fill-[#00ffd1] text-[#00ffd1]" : "text-gray-700"} 
                      />
                    ))}
                  </div>
                </div>

                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  {rev.date}
                </span>
              </div>

              {/* Review Text comment */}
              <p className="font-sans text-xs text-gray-300 mt-4 leading-relaxed font-light z-10 relative">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Right column: Beautiful interaction to write a review */}
        <div className="lg:col-span-4 bg-[#181818] rounded-lg border border-white/5 p-6 md:p-8 flex flex-col justify-between self-start">
          <div>
            <span className="font-mono text-[10px] text-[#00ffd1] uppercase tracking-widest font-bold block mb-1">
              VOTRE VŒU SÉCURISÉ
            </span>
            <h3 className="font-sans text-lg font-bold text-white tracking-tight">
              Ajouter votre Avis Privé
            </h3>
            <p className="font-sans text-xs text-gray-500 font-light mt-1.5 leading-relaxed">
              Faites-nous part de vos impressions sur la finesse haptique et l'esthétique de vos acquisitions LUXE.DROP.
            </p>

            {submitSuccess ? (
              <div className="p-4 bg-[#00ffd1]/5 border border-[#00ffd1]/20 rounded-md mt-6 space-y-2 animate-pulse">
                <div className="flex items-center gap-2 text-[#00ffd1]">
                  <CheckCircle size={14} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">AVIS ENREGISTRÉ</span>
                </div>
                <p className="font-sans text-xs text-gray-300 font-light">
                  Merci ! Votre commentaire vient d'être synchronisé et s'affiche au sommet de notre registre.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 mt-6">
                {/* Author Name */}
                <div>
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1.5">
                    Nom / Signature
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Victoire de S."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-sans text-xs text-white placeholder-gray-700 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all"
                  />
                </div>

                {/* Rating selection stars */}
                <div>
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1.5">
                    Note Haptique / Esthétique
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-gray-600 hover:text-[#00ffd1] transition-colors cursor-pointer"
                        title={`${star} étoiles`}
                      >
                        <Star 
                          size={18} 
                          className={star <= rating ? "fill-[#00ffd1] text-[#00ffd1]" : "text-gray-700 hover:text-white"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1.5">
                    Commentaire haptique & matériel
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Partagez votre retour d'expérience sur la prise en main, les finitions et la latence..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-sans text-xs text-white placeholder-gray-700 focus:outline-none focus:border-[#00ffd1] focus:ring-1 focus:ring-[#00ffd1] transition-all resize-none"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white hover:bg-[#00ffd1] text-black font-semibold font-sans text-xs py-3 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-pulse">Synchronisation...</span>
                  ) : (
                    <>
                      <PenTool size={12} />
                      Publier mon évaluation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
