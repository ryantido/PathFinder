import { Request, Response } from 'express';
import prisma from '../prisma';

export const listUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true, createdAt: true } });
  res.json(users);
};

export const updateUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!['USER', 'ADMIN'].includes(role)) return res.status(400).json({ message: 'Rôle invalide' });
  const user = await prisma.user.update({ where: { id }, data: { role } });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id } });
  res.json({ message: 'Utilisateur supprimé' });
};

// Métiers (jobs)
export const createJob = async (req: Request, res: Response) => {
  const { title, description, location, tags, url } = req.body;
  if (!title || !description || !location) return res.status(400).json({ message: 'Titre, description et localisation requis' });
  const job = await prisma.job.create({
    data: {
      title,
      description,
      location,
      tags: Array.isArray(tags) ? tags : [],
      url: url || null
    }
  });
  res.status(201).json(job);
};

export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.job.delete({ where: { id } });
  res.json({ message: 'Métier supprimé' });
};

// Quiz
export const createQuiz = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Titre requis' });
  const quiz = await prisma.quiz.create({ data: { title } });
  res.status(201).json(quiz);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.quiz.delete({ where: { id } });
  res.json({ message: 'Quiz supprimé' });
};
