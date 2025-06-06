# PATHFINDER JOB

Plateforme web d’orientation professionnelle : quiz, suggestions métiers, offres d’emploi filtrables, espace utilisateur sécurisé, back-office admin.

## Structure du projet

- `backend/` : API Node.js/Express/Prisma/PostgreSQL (TypeScript)
- `frontend/` : Next.js (TypeScript), Tailwind CSS, Zustand, etc.

---

## Installation rapide

### 1. Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Variables à renseigner dans `.env` (voir `.env.example`).

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Fonctionnalités principales
- Authentification sécurisée (JWT cookie HTTP-Only)
- Quiz multi-étapes, calcul score, suggestion métiers
- Catalogue offres d’emploi filtrable
- Espace utilisateur (profil, favoris, alertes)
- Back-office admin (à venir)

## Tests
- Backend : `npm test` (Jest + Supertest)
- Frontend : à venir (Jest + React Testing Library)

## CI/CD & déploiement
- Backend : Heroku/Render
- Frontend : Vercel
- PostgreSQL managé

---

## Conventions
- Branches : `main`, `develop`, `feature/*`
- Variables d’environnement : UPPER_SNAKE_CASE
- Fichiers TypeScript : camelCase
- Composants React : PascalCase

---

## Pour aller plus loin
- Voir `docs/API_SPEC.md` et `docs/ERD.pdf` pour la documentation technique.
- Contact : équipe Pathfinder
