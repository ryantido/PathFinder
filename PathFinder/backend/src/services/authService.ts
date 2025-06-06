import prisma from '../prisma';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

export const createUser = async (email: string, password: string, name: string) => {
  const hashed = await bcrypt.hash(password, 10);
  return prisma.user.create({ data: { email, password: hashed, name } });
};

export const validateUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.password);
  return valid ? user : null;
};

export const generateToken = (user: any) => {
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
  // Typage workaround : bug connu entre string et StringValue dans @types/jsonwebtoken v9
const options: jwt.SignOptions = { expiresIn: (process.env.JWT_EXPIRES_IN || '1d') as any };

  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as Secret,
    options
  );
};
