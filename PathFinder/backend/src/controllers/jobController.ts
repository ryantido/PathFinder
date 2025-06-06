import { Request, Response } from 'express';
import prisma from '../prisma';

export const listJobs = async (req: Request, res: Response) => {
  const { page = 1, tags, title, location } = req.query;
  const where: any = {};
  if (tags) where.tags = { hasSome: (tags as string).split(',') };
  if (title) where.title = { contains: title as string, mode: 'insensitive' };
  if (location) where.location = { contains: location as string, mode: 'insensitive' };
  const jobs = await prisma.job.findMany({
    where,
    skip: (Number(page) - 1) * 10,
    take: 10
  });
  res.json(jobs);
};

export const getJob = async (req: Request, res: Response) => {
  const job = await prisma.job.findUnique({ where: { id: req.params.id } });
  if (!job) return res.status(404).json({ message: 'Offre non trouvée' });
  res.json(job);
};

export const createJob = async (req: any, res: Response) => {
  if (req.user.role !== 'ADMIN') return res.status(403).json({ message: 'Accès refusé' });
  const job = await prisma.job.create({ data: { ...req.body, postedById: req.user.id } });
  res.status(201).json(job);
};

export const deleteJob = async (req: any, res: Response) => {
  if (req.user.role !== 'ADMIN') return res.status(403).json({ message: 'Accès refusé' });
  await prisma.job.delete({ where: { id: req.params.id } });
  res.json({ message: 'Offre supprimée' });
};
