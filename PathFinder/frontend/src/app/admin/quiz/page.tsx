'use client';
import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface Quiz {
  id: string;
  title: string;
  questionsCount: number;
  createdAt: string;
}

// @ts-nocheck
import { useAdminGuard } from '@/hooks/useAdminGuard';

export default function AdminQuizPage() {
  useAdminGuard();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/quiz').then(res => {
      setQuizzes(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Quiz</h1>
      <form
        className="mb-6 flex gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const title = (form.elements.namedItem('title') as HTMLInputElement).value;
          const res = await axios.post('/api/admin/quiz', { title });
          setQuizzes(quizzes => [...quizzes, { ...res.data, questionsCount: 0 }]);
          form.reset();
        }}
      >
        <input name="title" placeholder="Titre du quiz" className="border px-2 py-1 rounded" required />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" type="submit">Ajouter</button>
      </form>
      {loading ? <p>Chargement...</p> : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Titre</th>
              <th className="p-2 border">Questions</th>
              <th className="p-2 border">Créé le</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map(q => (
              <tr key={q.id}>
                <td className="border p-2">{q.title}</td>
                <td className="border p-2">{q.questionsCount}</td>
                <td className="border p-2">{new Date(q.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={async () => {
                      if (confirm('Supprimer ce quiz ?')) {
                        await axios.delete(`/api/admin/quiz/${q.id}`);
                        setQuizzes(quizzes => quizzes.filter(quiz => quiz.id !== q.id));
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
