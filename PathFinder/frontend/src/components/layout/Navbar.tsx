"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/hooks/authStore";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  // TODO: Animation d'apparition, feedback sur navigation active

  const { user, setUser } = useAuthStore();
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow bg-gradient-to-r from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 sticky top-0 z-50 border-b border-blue-100 dark:border-gray-800">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">PathFinder</Link>
        <Link href="/jobs" className={pathname==='/jobs' ? 'font-semibold text-blue-700 dark:text-blue-400 underline' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'}>Offres</Link>
        <Link href="/quiz" className={pathname==='/quiz' ? 'font-semibold text-blue-700 dark:text-blue-400 underline' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'}>Quiz</Link>
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{user.name}</span>
            <Link href="/profile"><Button variant="outline">Profil</Button></Link>
            <Button variant="ghost" onClick={() => { setUser(null); document.cookie = 'token=; Max-Age=0; path=/'; window.location.href = '/'; }}>Déconnexion</Button>
          </>
        ) : (
          <>
            <Link href="/login"><Button>Connexion</Button></Link>
            <Link href="/signup"><Button variant="outline">Inscription</Button></Link>
          </>
        )}
      </div>
    </nav>
  );
}
