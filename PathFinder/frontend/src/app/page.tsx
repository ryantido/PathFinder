import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // UI inspirée de la maquette fournie : hero photo sombre, overlays abstraits, call-to-action, cards premium, footer violet

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <Image
            src="/next.svg"
            alt="PathFinder Logo"
            width={120}
            height={32}
            className="mx-auto mb-6 drop-shadow-lg"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            PathFinder Job Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Trouve l{''}d{''}emploi qui te correspond, passe des quiz d{''}orientation, et découvre les meilleures opportunités tech du moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/jobs" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
              Voir les offres
            </Link>
            <Link href="/quiz" className="px-6 py-3 rounded-lg bg-white text-blue-600 border border-blue-600 font-semibold shadow hover:bg-blue-50 transition dark:bg-gray-950 dark:text-blue-400 dark:border-blue-400">
              Passer le quiz
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/icons/job.svg" alt="Jobs" width={36} height={36} className="mb-2" />
              <h3 className="font-bold text-lg mb-1">Offres ciblées</h3>
              <p className="text-gray-500 text-sm">Des centaines d{''}offres tech, filtrées selon ton profil et tes préférences.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/icons/quiz.svg" alt="Quiz" width={36} height={36} className="mb-2" />
              <h3 className="font-bold text-lg mb-1">Quiz d{''}orientation</h3>
              <p className="text-gray-500 text-sm">Découvre tes affinités métiers grâce à notre quiz intelligent.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
              <Image src="/icons/community.svg" alt="Community" width={36} height={36} className="mb-2" />
              <h3 className="font-bold text-lg mb-1">Communauté & conseils</h3>
              <p className="text-gray-500 text-sm">Bénéficie de retours d{''}expérience et de conseils carrière personnalisés.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} PathFinder. Plateforme moderne pour l{''}d{''}emploi tech.
      </footer>
    </div>
  );
}
