
import React from 'react';
import { EXPERT_NAME, PROFESSION, HERO_IMAGES, WHATSAPP_URL } from '../constants';
import { Sparkles, ArrowRight, ClipboardCheck, MessageCircle } from 'lucide-react';

interface InitialDecisionProps {
  onStartQuiz: () => void;
  onGoDirectToSite: () => void;
}

const InitialDecision: React.FC<InitialDecisionProps> = ({ onStartQuiz, onGoDirectToSite }) => {
  return (
    <div className="max-w-[340px] md:max-w-md w-full glass rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center space-y-5 md:space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-emerald-500/50 p-1 animate-float overflow-hidden">
          <img 
            src={HERO_IMAGES[0]} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1.5 md:p-2 rounded-full">
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-tight italic">
          Bem-vinda ao <br/> Mundo do {EXPERT_NAME}
        </h1>
        <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
          {PROFESSION}
        </p>
      </div>

      <p className="text-neutral-300 leading-snug text-xs md:text-sm italic px-2">
        "Sua beleza é única e merece atenção especial. Vamos descobrir qual o melhor caminho para sua próxima arte?"
      </p>

      <div className="w-full space-y-3 md:space-y-4">
        <button 
          onClick={onStartQuiz}
          className="w-full bg-white text-black py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform active:scale-95 group shadow-lg shadow-white/5"
        >
          <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5" />
          <span>Fazer Avaliação Personalizada</span>
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-emerald-500 text-white py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          <span>Falar no WhatsApp Agora</span>
        </a>

        <button 
          onClick={onGoDirectToSite}
          className="w-full bg-transparent text-neutral-400 border border-white/10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          Ir Direto para o Site
        </button>
      </div>
    </div>
  );
};

export default InitialDecision;
