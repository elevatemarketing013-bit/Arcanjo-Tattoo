
import React from 'react';
import { EXPERT_NAME, PROFESSION, HERO_IMAGES, WHATSAPP_URL } from '../constants';
import { Sparkles, ArrowRight, ClipboardCheck, MessageCircle } from 'lucide-react';

interface InitialDecisionProps {
  onStartQuiz: () => void;
  onGoDirectToSite: () => void;
}

const InitialDecision: React.FC<InitialDecisionProps> = ({ onStartQuiz, onGoDirectToSite }) => {
  return (
    <div className="max-w-md w-full glass rounded-3xl p-8 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-2 border-emerald-500/50 p-1 animate-float overflow-hidden">
          <img 
            src={HERO_IMAGES[0]} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-full">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-medium tracking-tight italic">
          Bem-vinda ao <br/> Mundo do {EXPERT_NAME}
        </h1>
        <p className="text-neutral-400 text-sm uppercase tracking-[0.2em] font-medium">
          {PROFESSION}
        </p>
      </div>

      <p className="text-neutral-300 leading-relaxed text-sm italic">
        "Sua beleza é única e merece atenção especial. Vamos descobrir qual o melhor caminho para sua próxima arte?"
      </p>

      <div className="w-full space-y-4">
        <button 
          onClick={onStartQuiz}
          className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform active:scale-95 group"
        >
          <ClipboardCheck className="w-5 h-5" />
          <span>Fazer Avaliação Personalizada</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Falar no WhatsApp Agora</span>
        </a>

        <button 
          onClick={onGoDirectToSite}
          className="w-full bg-transparent text-white border border-white/20 py-4 rounded-2xl font-medium text-sm hover:bg-white/5 transition-colors"
        >
          Ir Direto para o Site
        </button>
      </div>
    </div>
  );
};

export default InitialDecision;
