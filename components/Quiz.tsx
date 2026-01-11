
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
    <div className="min-h-screen flex flex-col items-center p-6 relative">
      {/* Header Profile - Floating through whole quiz */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 glass px-6 py-3 rounded-full z-50">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500/30">
          <img src={HERO_IMAGES[0]} alt={EXPERT_NAME} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 leading-none">{EXPERT_NAME}</span>
          <span className="text-[10px] text-neutral-400">Avaliação Exclusiva</span>
        </div>
      </div>

      <div className="mt-28 w-full max-w-md flex flex-col flex-1">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-neutral-900 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button 
          onClick={onCancel}
          className="flex items-center text-neutral-500 text-xs font-medium mb-6 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> VOLTAR
        </button>

        <div className="animate-in slide-in-from-right-8 duration-500">
          <h2 className="text-2xl font-serif italic mb-10 leading-tight">
            {QUIZ_QUESTIONS[currentIndex].text}
          </h2>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full text-left glass p-6 rounded-2xl border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all active:scale-95 flex items-center justify-between group"
              >
                <span className="text-sm font-medium text-neutral-200 group-hover:text-white">{option}</span>
                <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all">
                   <Check className="w-3 h-3 text-transparent group-hover:text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-10 text-center">
            <button 
              onClick={onCancel} 
              className="text-xs text-neutral-500 underline underline-offset-4"
            >
                Prefiro ir para o site agora
            </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
