
import React, { useEffect, useRef, useState } from 'react';
import { 
  EXPERT_NAME, 
  PROFESSION, 
  ADDRESS, 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  HERO_VIDEO, 
  HERO_IMAGES, 
  GALLERY_RESULTS, 
  FINE_LINE_IMAGES, 
  COMMENTS_IMAGES 
} from '../constants';
import { 
  ChevronRight, 
  Instagram, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Heart, 
  Zap, 
  Calendar,
  ExternalLink,
  Play,
  X,
  Maximize2
} from 'lucide-react';

interface MainSiteProps {
  isActive: boolean;
}

const MainSite: React.FC<MainSiteProps> = ({ isActive }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className={`w-full bg-[#0a0a0a] overflow-x-hidden ${isActive ? '' : 'pointer-events-none'}`}>
      
      {/* Lightbox Modal Premium */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-full max-h-[85vh] md:max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Ampliada" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500">Detalhe Premium • {EXPERT_NAME}</p>
            </div>
          </div>
        </div>
      )}

      {/* Logradouro (Marquee Nav) */}
      <nav className="sticky top-0 z-[60] glass border-b border-white/5 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap py-3">
          {[1,2,3].map((n) => (
            <div key={n} className="flex space-x-12 px-6">
              <button onClick={() => scrollToSection('sobre')} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">SOBRE MIM</button>
              <button onClick={() => scrollToSection('resultados')} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">PROVA VISUAL</button>
              <button onClick={() => scrollToSection('fineline')} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">FINE LINE • MICRO REALISMO</button>
              <button onClick={() => scrollToSection('mapa')} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">ONDE NOS ENCONTRAR</button>
              <button onClick={() => scrollToSection('contato')} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">CONTATO</button>
            </div>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Video Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="relative group">
              <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <video 
                  src={HERO_VIDEO} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 glass p-4 rounded-3xl animate-float">
                <Play className="w-5 h-5 text-emerald-500 fill-emerald-500" />
              </div>
            </div>
            <p className="text-neutral-400 italic text-sm leading-relaxed">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito.
              Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única.
            </p>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
             <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500">Agende sua avaliação</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight leading-[1.1]">
               Eu sou o <br/> {EXPERT_NAME}
             </h1>
             
             <p className="text-xl text-neutral-300 font-light">
               Especialista em realçar sua identidade através de traços finos e micro realismo de alto nível.
             </p>

             <div className="space-y-4">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center bg-white text-black py-6 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-white/5"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  CHAMAR NO WHATSSAP
                </a>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Sem compromisso via WhatsApp</p>
             </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu */}
      <section id="sobre" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img src={HERO_IMAGES[2]} alt="Expert Workshop" className="rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[2rem] max-w-[200px] hidden md:block">
                 <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Traços</p>
                 <p className="text-lg font-serif italic text-white">"Cada pele conta uma história, cada traço a eterniza."</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif italic mb-8">Autoridade e Sensibilidade</h2>
            <p className="text-neutral-400 leading-relaxed">
              Minha jornada no mundo da tatuagem é pautada pelo respeito absoluto à individualidade de cada cliente. Não realizo apenas procedimentos; entrego confiança.
            </p>
            <div className="space-y-4 pt-6">
              {[
                "Especialista em traços ultrafinos (Fine Line)",
                "Micro realismo com precisão cirúrgica",
                "Ambiente exclusivo e privativo",
                "Foco em cicatrização e longevidade da arte"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-emerald-500/10 p-1 rounded-full">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais - Precise Proportions 758x815 & Compacted */}
      <section id="resultados" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-4xl font-serif italic">Resultados Reais</h2>
            <p className="text-neutral-500 text-sm">Toque na foto para ampliar e ver os detalhes. <span className="text-emerald-500 font-bold ml-1">← deslize →</span></p>
          </div>
        </div>
        
        <div className="flex md:justify-center items-center space-x-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 px-6 md:px-0">
          {GALLERY_RESULTS.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img)}
              className="snap-center overflow-hidden rounded-xl glass relative group shrink-0 shadow-lg border border-white/5 transition-transform duration-500 hover:z-10 cursor-zoom-in active:scale-95"
              style={{ 
                width: '135px', 
                aspectRatio: '758 / 815' 
              }}
            >
              <img 
                src={img} 
                alt={`Resultado ${i}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white/70" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center mt-4 text-[9px] text-neutral-600 uppercase tracking-widest font-bold">* Cicatrização impecável garantida por protocolo exclusivo</p>
        </div>
      </section>

      {/* Porque Confiar */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Star />, title: "Avaliação Honesta", desc: "Só indico o que realmente trará o melhor resultado para você." },
            { icon: <Heart />, title: "Cuidado Pessoal", desc: "Acompanhamento em todas as fases, do desenho à cicatrização." },
            { icon: <ShieldCheck />, title: "Ambiente Seguro", desc: "Protocolos rigorosos de higiene e biossegurança." },
            { icon: <Zap />, title: "Técnica Exclusiva", desc: "Desenvolvi meu próprio método para traços que não estouram." }
          ].map((card, i) => (
            <div key={i} className="glass p-8 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-500">{card.icon}</div>
              <h3 className="font-bold tracking-tight">{card.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fine Line de Coração - Centralized & COMPACTED Horizontal Scroll with 758x815 Ratio */}
      <section id="fineline" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-serif italic">Fine Line • <br/> Micro Realismo de 💚</h2>
            <p className="text-neutral-500 text-sm">A delicadeza em cada pixel. Toque para ampliar. <span className="text-emerald-500 font-bold ml-1">← deslize →</span></p>
          </div>
        </div>

        <div className="flex md:justify-center items-center space-x-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 px-6 md:px-0">
          {FINE_LINE_IMAGES.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img)}
              className="snap-center overflow-hidden rounded-xl glass relative group shrink-0 shadow-lg border border-white/5 transition-transform duration-500 hover:z-10 cursor-zoom-in active:scale-95"
              style={{ 
                width: '135px', 
                aspectRatio: '758 / 815' 
              }}
            >
               <img 
                 src={img} 
                 alt="Fine line work" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Maximize2 className="w-5 h-5 text-white/70" />
               </div>
               <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                 <Heart className="w-2.5 h-2.5 text-emerald-500 fill-emerald-500" />
               </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 group hover:text-white transition-colors">
            QUERO MEU TRAÇO EXCLUSIVO <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Comentários */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif italic text-center mb-16">O que dizem quem já foi <br/> cuidada por mim</h2>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-12 snap-x">
            {COMMENTS_IMAGES.map((img, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center glass rounded-3xl overflow-hidden">
                <img src={img} alt="Depoimento" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-6 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="text-4xl font-serif italic">Como funciona a primeira consulta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "WhatsApp", d: "Conversa inicial para entender seu desejo e agendar o melhor horário." },
              { n: "02", t: "Agendamento", d: "Reserva da sua data com exclusividade total na agenda." },
              { n: "03", t: "Avaliação & Arte", d: "Estudo da anatomia e criação do desenho perfeito para você." }
            ].map((step, i) => (
              <div key={i} className="space-y-4 relative">
                <span className="text-6xl font-serif italic text-emerald-500/20 absolute -top-10 left-1/2 -translate-x-1/2">{step.n}</span>
                <h3 className="text-xl font-bold relative z-10">{step.t}</h3>
                <p className="text-sm text-neutral-400 relative z-10">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section id="mapa" className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-serif italic">Localização</h2>
                <p className="text-neutral-500 flex items-center justify-center md:justify-start"><MapPin className="w-4 h-4 mr-2" /> {ADDRESS}</p>
             </div>
             <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">Abrir no Maps</a>
          </div>
          <div className="w-full h-[400px] rounded-[3rem] overflow-hidden glass border border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.93184650638!2d-46.4428!3d-23.6677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce695f8e65e631%3A0x67949397f267a18!2sMau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full grayscale invert opacity-70"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-32 px-6 bg-white text-black text-center rounded-t-[4rem]">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight">Sua transformação começa aqui.</h2>
          <p className="text-xl font-medium text-neutral-600">Minha agenda é exclusiva e limitada. Reserve seu momento para ser cuidada com o que há de melhor em Fine Line.</p>
          <div className="space-y-6">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex w-full md:w-auto px-12 py-6 bg-black text-white rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
            >
              CHAMAR NO WHATSSAP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black text-center space-y-8 border-t border-white/5">
        <div className="flex flex-col items-center space-y-4">
          <span className="font-signature text-6xl text-white opacity-80">{EXPERT_NAME}</span>
          <p className="text-xs uppercase tracking-[0.4em] font-medium text-neutral-500">{PROFESSION}</p>
          <p className="text-xs text-neutral-600">{ADDRESS}</p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-[10px] text-neutral-800 uppercase tracking-widest">© 2024 • Desenvolvido com exclusividade</p>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default MainSite;
