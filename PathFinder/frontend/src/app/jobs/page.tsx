"use client";
import useSWR from "swr";
import api from "@/lib/axios";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

const fetcher = (url: string) => api.get(url).then(res => res.data);

export default function JobsPage() {
  // TODO: Ajouter animation d'apparition des cards et feedback visuel sur erreur

  const [query, setQuery] = useState("");
  const { data: jobs, isLoading } = useSWR(`/api/jobs?title=${query}`, fetcher);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-8">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">Offres d{''}l{''}emploi</h1>
        <Input placeholder="Recherche par titre..." value={query} onChange={e => setQuery(e.target.value)} className="mb-6" />
        {isLoading ? <div className="text-center text-blue-500 animate-pulse py-8">Chargement...</div> : (
          <div className="grid gap-6">
            {jobs?.length ? jobs.map((job: any) => (
              <Card key={job.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-gray-900 border border-blue-50 dark:border-gray-800 shadow-sm hover:shadow-lg transition">
                <div>
                  <span className="font-semibold text-lg">{job.title}</span>
                  <span className="block text-sm text-gray-500">{job.location}</span>
                  <span className="block mt-1 text-xs text-gray-400">{job.tags?.join(', ')}</span>
                </div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition whitespace-nowrap">Voir l'offre</a>
              </Card>
            )) : <p className="text-center text-gray-400 py-8">Aucune offre trouvée.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
