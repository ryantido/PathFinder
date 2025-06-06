import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Création d'utilisateurs de base
  const passwordHash = await bcrypt.hash('password123', 10);

  const user1 = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: passwordHash,
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: passwordHash,
      name: 'User',
      role: 'USER',
    },
  });

  // Création d'un quiz
  const quiz = await prisma.quiz.create({
    data: {
      title: 'Quiz de test',
      questions: {
        create: [
          {
            title: 'Question 1',
            content: 'Quel est le langage principal utilisé avec Prisma ?',
            answers: {
              create: [
                { content: 'JavaScript', isCorrect: false },
                { content: 'TypeScript', isCorrect: true },
                { content: 'Python', isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Création d'un job
  await prisma.job.create({
    data: {
      title: 'Développeur Fullstack',
      description: 'Développement d\'applications web',
      tags: ['TypeScript', 'React', 'Node.js'],
      location: 'Remote',
      url: 'https://example.com/job',
      postedBy: { connect: { id: user1.id } },
    },
  });

  console.log('Seeds insérés avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
