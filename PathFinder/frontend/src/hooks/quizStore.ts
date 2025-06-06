import { create } from 'zustand';

interface QuizState {
  step: number;
  answers: number[];
  setStep: (step: number) => void;
  setAnswers: (answers: number[]) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  step: 0,
  answers: [],
  setStep: (step) => set({ step }),
  setAnswers: (answers) => set({ answers }),
  reset: () => set({ step: 0, answers: [] }),
}));
