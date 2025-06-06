import { Request, Response } from 'express';
import prisma from '../prisma';

export const getQuiz = async (req: Request, res: Response) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: req.params.id },
    include: { questions: true }
  });
  if (!quiz) return res.status(404).json({ message: 'Quiz non trouvé' });
  res.json(quiz);
};

export const submitQuiz = async (req: any, res: Response) => {
  const { answers } = req.body;
  const quiz = await prisma.quiz.findUnique({ where: { id: req.params.id }, include: { questions: true } });
  if (!quiz) return res.status(404).json({ message: 'Quiz non trouvé' });
  let score = 0;
  quiz.questions.forEach((q: any, i: number) => { score += q.weights[answers[i]]; });
  const profile = score > 10 ? 'Développeur' : 'Designer';
  const result = await prisma.quizResult.create({
    data: {
      userId: req.user.id,
      quizId: quiz.id,
      answers,
      score,
      profile
    }
  });
  res.json({ score, profile, resultId: result.id });
};
