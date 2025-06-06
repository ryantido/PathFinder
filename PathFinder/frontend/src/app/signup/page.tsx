"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuthStore } from "@/hooks/authStore";

const signupSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe requis"),
});

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  // UI inspirée de la maquette fournie, fond bleu profond, panel blanc, social login, responsive

  // TODO: Ajouter une animation de transition, et un feedback visuel sur succès/échec

  const { setUser, setError } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/register", data);
      setUser(res.data.user);
      router.push("/profile");
    } catch (e: any) {
      setError(e.response?.data?.message || "Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="flex w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900">
        {/* Panel gauche bleu profond */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 p-10 text-white relative">
          <div className="absolute top-4 left-4 text-2xl font-bold tracking-wide"> {/* Logo ou nom */}
            <span className="text-white/90">PathFinder</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">SOYEZ LES BIENVENUES ICI</h2>
            <p className="text-center text-blue-100">Vous êtes notre priorité et notre force</p>
          </div>
        </div>
        {/* Panel droit formulaire */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 gap-6 bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center gap-2 mb-4">
            <img src="/logo.svg" alt="logo" className="h-10 mb-2" />
            <div className="flex gap-4 mb-2">
              <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-50"><img src="/icons/facebook.svg" alt="facebook" className="h-5" /></button>
              <span className="text-gray-400 font-medium">ou</span>
              <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-50"><img src="/icons/google.svg" alt="google" className="h-5" /></button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input type="text" placeholder="Nom" {...register("name")}/>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            <Input type="email" placeholder="Numéro / Email" {...register("email")}/>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            <Input type="password" placeholder="Mot de passe" {...register("password")}/>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            <Button type="submit" loading={loading} className="w-full mt-2 bg-[#3c278d] hover:bg-[#2a1e6c] text-white text-base font-bold rounded-lg py-3 shadow-lg">S&apos;inscrire</Button>
          </form>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-gray-500">Avez-vous déjà un compte ? <a href="/login" className="text-[#3c278d] font-semibold hover:underline">Se connecter</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
