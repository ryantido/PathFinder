'use client';
import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

import { useAdminGuard } from '@/hooks/useAdminGuard';

export default function AdminUsersPage() {
  useAdminGuard();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/admin/users').then(res => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Utilisateurs</h1>
      {loading ? <p>Chargement...</p> : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Nom</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Rôle</th>
              <th className="p-2 border">Créé le</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.role}</td>
                <td className="border p-2">{new Date(u.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">
                  <select
                    value={u.role}
                    onChange={async (e) => {
                      const role = e.target.value;
                      await axios.patch(`/api/admin/users/${u.id}/role`, { role });
                      setUsers(users => users.map(user => user.id === u.id ? { ...user, role } : user));
                    }}
                    className="border rounded px-2 py-1"
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                  <button
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={async () => {
                      if (confirm('Supprimer cet utilisateur ?')) {
                        await axios.delete(`/api/admin/users/${u.id}`);
                        setUsers(users => users.filter(user => user.id !== u.id));
                      }
                    }}
                  >Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
