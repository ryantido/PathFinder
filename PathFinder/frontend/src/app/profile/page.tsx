"use client";
import { useAuthStore } from "@/hooks/authStore";
import { useEffect } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    if (!user) {
      api.get("/api/auth/me").then(res => setUser(res.data.user)).catch(() => {});
    }
  }, [user, setUser]);

  if (!user) return <p className="mt-8 text-center">Chargement du profil...</p>;

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Mon profil</h1>
      <div className="mb-4">
        <div><span className="font-semibold">Nom :</span> {user.name}</div>
        <div><span className="font-semibold">Email :</span> {user.email}</div>
        <div><span className="font-semibold">Rôle :</span> {user.role}</div>
      </div>
      <Button variant="outline" onClick={() => { setUser(null); document.cookie = 'token=; Max-Age=0; path=/'; window.location.href = '/'; }}>Déconnexion</Button>
    </div>
  );
}
