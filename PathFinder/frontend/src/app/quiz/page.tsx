"use client";
import { useQuizStore } from "@/hooks/quizStore";
import { Button } from "@/components/ui/Button";

export default function QuizPage() {
  // TODO: Ajouter animation d&apos;apparition et feedback visuel sur progression

  const { step, setStep, answers, setAnswers, reset } = useQuizStore();
  // Placeholder: à remplacer par un vrai fetch des questions côté API
  const questions = [
    { text: "Préférez-vous le front ou le back ?", options: ["Front", "Back"] },
    { text: "Aimez-vous travailler en équipe ?", options: ["Oui", "Non"] }
  ];
  const isLast = step === questions.length - 1;

  const handleNext = (answer: number) => {
    setAnswers([...answers.slice(0, step), answer]);
    if (!isLast) setStep(step + 1);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-50 dark:border-gray-800">
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text mb-2">Quiz d'orientation</h1>
        <div>
          <p className="mb-4 text-center text-lg font-medium">{questions[step].text}</p>
          <div className="flex gap-2 justify-center">
            {questions[step].options.map((opt, idx) => (
              <Button key={idx} onClick={() => handleNext(idx)}>{opt}</Button>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {step > 0 && <Button variant="ghost" onClick={() => setStep(step - 1)}>Précédent</Button>}
          {isLast && <Button variant="outline" onClick={reset}>Recommencer</Button>}
        </div>
      </div>
    </div>
  );
}
