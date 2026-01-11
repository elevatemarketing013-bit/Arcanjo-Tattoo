
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import MainSite from './components/MainSite';
import InitialDecision from './components/InitialDecision';
import { EXPERT_NAME } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INITIAL);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleGoDirectlyToSite = () => setCurrentStep(AppState.MAIN_SITE);

  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentStep(AppState.ANALYZING);
    // Simulate analysis delay
    setTimeout(() => {
      setCurrentStep(AppState.RESULT);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen selection:bg-neutral-800 selection:text-white">
      {/* Background Main Site (Blurred when Quiz is active) */}
      <div className={`transition-all duration-700 ${currentStep !== AppState.MAIN_SITE ? 'blur-2xl opacity-40' : 'opacity-100'}`}>
        <MainSite isActive={currentStep === AppState.MAIN_SITE} />
      </div>

      {/* Overlay Screens */}
      {currentStep === AppState.INITIAL && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <InitialDecision onStartQuiz={handleStartQuiz} onGoDirectToSite={handleGoDirectlyToSite} />
        </div>
      )}

      {currentStep === AppState.QUIZ && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl">
          <Quiz onComplete={handleQuizComplete} onCancel={() => setCurrentStep(AppState.INITIAL)} />
        </div>
      )}

      {currentStep === AppState.ANALYZING && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95">
          <div className="w-64 p-1 rounded-full bg-neutral-900 border border-neutral-800">
            <div className="h-2 rounded-full bg-emerald-500 animate-[loading_2s_ease-in-out_infinite]" style={{ width: '60%' }}></div>
          </div>
          <p className="mt-6 text-emerald-500 font-medium tracking-widest text-sm animate-pulse">ANALISANDO PERFIL...</p>
          <style>{`
            @keyframes loading {
              0% { width: 0%; margin-left: 0%; }
              50% { width: 60%; margin-left: 20%; }
              100% { width: 0%; margin-left: 100%; }
            }
          `}</style>
        </div>
      )}

      {currentStep === AppState.RESULT && (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
          <ResultPage 
            answers={quizAnswers} 
            onContinue={() => setCurrentStep(AppState.MAIN_SITE)} 
          />
        </div>
      )}
    </div>
  );
};

export default App;
