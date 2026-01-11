
import React from 'react';
import { HERO_IMAGES, EXPERT_NAME, WHATSAPP_URL } from '../constants';
import { Send, MessageSquare, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const handleWhatsAppResult = (withText: boolean) => {
    const text = withText 
      ? encodeURIComponent(`Olá Arcanjo! Fiz minha avaliação no site e meu perfil deu compatível. Minhas escolhas foram: ${answers.join(', ')}. Gostaria de saber detalhes sobre agendamento!`)
      : encodeURIComponent(`Olá Arcanjo! Vi seu site e gostaria de agendar uma consulta.`);
    window.open(`${WHATSAPP_URL}&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-4 items-center max-w-md mx-auto animate-in fade-in duration-700 bg-black overflow-hidden">
      {/* Container Compacto */}
      <div className="w-full flex flex-col items-center space-y-4">
        
        {/* Header de Status */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>Perfil Compatível</span>
          </div>
          <h2 className="text-2xl font-serif italic text-white leading-tight">
            Você é a Paciente ideal.
          </h2>
        </div>

        {/* Card de Imagem Compacto */}
        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
          <img 
            src={HERO_IMAGES[1]} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Badge flutuante de autoridade */}
          <div className="absolute bottom-4 left-4 right-4">
             <p className="text-[10px] text-white/80 leading-snug text-center italic">
                O Método <span className="text-emerald-400 font-bold">{EXPERT_NAME}</span> entrega a naturalidade que você procura.
             </p>
          </div>
        </div>

        {/* Texto de Apoio Curto */}
        <p className="text-neutral-400 text-[11px] leading-relaxed text-center px-6">
          Com base nas suas respostas, você possui o perfil exato para obter resultados excepcionais com nossa técnica exclusiva.
        </p>

        {/* Bloco de Botões Agrupados */}
        <div className="w-full space-y-2.5 pt-2">
          {/* 1- Enviar Avaliação */}
          <button 
            onClick={() => handleWhatsAppResult(true)}
            className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform animate-pulse"
          >
            <Send className="w-4 h-4" />
            <span>1- ENVIAR MINHA AVALIAÇÃO AO DRA</span>
          </button>

          {/* 2- Chamar sem compromisso */}
          <button 
            onClick={() => handleWhatsAppResult(false)}
            className="w-full glass text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 active:scale-95 transition-transform border border-white/10"
          >
            <MessageSquare className="w-4 h-4" />
            <span>2- CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
          </button>

          {/* 3- Continuar no Site */}
          <button 
            onClick={onContinue}
            className="w-full bg-neutral-900/50 text-neutral-400 py-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 active:scale-95 transition-transform border border-white/5"
          >
            <XCircle className="w-4 h-4" />
            <span>3- NÃO ENVIAR E CONTINUAR NO SITE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
