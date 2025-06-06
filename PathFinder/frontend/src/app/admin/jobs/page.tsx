'use client';
import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface Job {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

// @ts-nocheck
import { useAdminGuard } from '@/hooks/useAdminGuard';

export default function AdminJobsPage() {
  useAdminGuard();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/jobs').then(res => {
      setJobs(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Métiers</h1>
      <form
        className="mb-6 flex gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const title = (form.elements.namedItem('title') as HTMLInputElement).value;
          const description = (form.elements.namedItem('description') as HTMLInputElement).value;
          const res = await axios.post('/api/admin/jobs', { title, description });
          setJobs(jobs => [...jobs, res.data]);
          form.reset();
        }}
      >
        <input name="title" placeholder="Titre" className="border px-2 py-1 rounded" required />
        <input name="description" placeholder="Description" className="border px-2 py-1 rounded" required />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" type="submit">Ajouter</button>
      </form>
      {loading ? <p>Chargement...</p> : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Titre</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Créé le</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(j => (
              <tr key={j.id}>
                <td className="border p-2">{j.title}</td>
                <td className="border p-2">{j.description}</td>
                <td className="border p-2">{new Date(j.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={async () => {
                      if (confirm('Supprimer ce métier ?')) {
                        await axios.delete(`/api/admin/jobs/${j.id}`);
                        setJobs(jobs => jobs.filter(job => job.id !== j.id));
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
