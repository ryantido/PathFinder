import { Request, Response } from 'express';
import prisma from '../prisma';

export const getMe = async (req: any, res: Response) => {
  res.json({ user: req.user });
};

export const updateMe = async (req: any, res: Response) => {
  const { name } = req.body;
  const user = await prisma.user.update({ where: { id: req.user.id }, data: { name } });
  res.json(user);
};

export const updateSettings = async (req: any, res: Response) => {
  const { privateMode, alerts } = req.body;
  const settings = await prisma.settings.upsert({
    where: { userId: req.user.id },
    update: { privateMode, alerts },
    create: { userId: req.user.id, privateMode, alerts }
  });
  res.json(settings);
};
