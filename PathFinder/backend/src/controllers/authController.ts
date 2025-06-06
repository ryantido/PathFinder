import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import prisma from '../prisma';

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed, name } });
  res.status(201).json({ user: { id: user.id, email: user.email, name: user.name } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Identifiants invalides' });
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
// Typage workaround : bug connu entre string et StringValue dans @types/jsonwebtoken v9
const options: jwt.SignOptions = { expiresIn: (process.env.JWT_EXPIRES_IN || '1d') as any };

const token = jwt.sign(
  { id: user.id, role: user.role },
  process.env.JWT_SECRET as Secret,
  options
);
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
  res.json({ user: { id: user.id, email: user.email, name: user.name } });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ message: 'Déconnecté' });
};

export const getProfile = async (req: any, res: Response) => {
  res.json({ user: req.user });
};
