
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, HERO_IMAGES, EXPERT_NAME } from '../constants';
import { ChevronLeft, Check } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center p-4 relative bg-black/95">
      {/* Header Profile - Compacted for Mobile */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 glass px-4 py-2 rounded-full z-50 border border-white/10">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/30">
          <img src={HERO_IMAGES[0]} alt={EXPERT_NAME} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 leading-none">{EXPERT_NAME}</span>
          <span className="text-[8px] text-neutral-400">Avaliação Premium</span>
        </div>
      </div>

      <div className="mt-20 w-full max-w-md flex flex-col flex-1">
        {/* Progress Bar - Tighter spacing */}
        <div className="w-full h-1 bg-neutral-900 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button 
          onClick={onCancel}
          className="flex items-center text-neutral-500 text-[10px] font-bold mb-4 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ChevronLeft className="w-3 h-3 mr-1" /> VOLTAR
        </button>

        <div className="animate-in slide-in-from-right-4 duration-500">
          <h2 className="text-xl font-serif italic mb-6 leading-tight text-white px-1">
            {QUIZ_QUESTIONS[currentIndex].text}
          </h2>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full text-left glass p-4 rounded-xl border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all active:scale-[0.98] flex items-center justify-between group"
              >
                <span className="text-xs font-medium text-neutral-300 group-hover:text-white leading-relaxed pr-4">{option}</span>
                <div className="shrink-0 w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all">
                   <Check className="w-2.5 h-2.5 text-transparent group-hover:text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8 pb-4 text-center">
            <button 
              onClick={onCancel} 
              className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold hover:text-neutral-400 transition-colors"
            >
                Pular para o site principal
            </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
