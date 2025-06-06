import React from 'react';
import Link from 'next/link';

import { useAdminGuard } from '@/hooks/useAdminGuard';

export default function AdminPage() {
  useAdminGuard();
  return (
    <main className="max-w-3xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Admin - Tableau de bord</h1>
      <ul className="space-y-4">
        <li><Link className="text-blue-600 hover:underline" href="/admin/users">Gérer les utilisateurs</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/jobs">Gérer les métiers</Link></li>
        <li><Link className="text-blue-600 hover:underline" href="/admin/quiz">Gérer les quiz</Link></li>
      </ul>
    </main>
  );
}
