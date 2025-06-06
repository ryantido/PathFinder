import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      {/* Hero section avec fond photo sombre et overlay violet/bleu */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image src="/hero-contact.jpg" alt="Contact Hero" layout="fill" objectFit="cover" className="brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3c278d]/80 to-[#5e60ce]/60 mix-blend-multiply" />
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
          CONTACTEZ-NOUS
        </h1>
      </div>
      <main className="flex-1 flex flex-col md:flex-row gap-8 px-4 py-10 max-w-5xl mx-auto w-full">
        {/* Formulaire */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-50 dark:border-gray-800 max-w-md mx-auto md:mx-0">
          <h2 className="text-xl font-bold mb-4 text-[#3c278d]">Contactez Nous</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nom" className="rounded-lg border border-blue-100 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-950 shadow-sm focus:ring-2 focus:ring-[#3c278d]" />
            <input type="email" placeholder="Email" className="rounded-lg border border-blue-100 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-950 shadow-sm focus:ring-2 focus:ring-[#3c278d]" />
            <input type="text" placeholder="Sujet" className="rounded-lg border border-blue-100 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-950 shadow-sm focus:ring-2 focus:ring-[#3c278d]" />
            <textarea placeholder="Message" rows={4} className="rounded-lg border border-blue-100 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-950 shadow-sm focus:ring-2 focus:ring-[#3c278d] resize-none" />
            <button type="submit" className="w-full mt-2 bg-[#3c278d] hover:bg-[#2a1e6c] text-white text-base font-bold rounded-lg py-3 shadow-lg transition">Envoyer</button>
          </form>
        </div>
        {/* Coordonnées & carte */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-50 dark:border-gray-800 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2 text-[#3c278d]">Rejoignez-nous pour découvrir de nouvelles opportunités d&#39;emploi et de stage</h3>
            <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
              <span><b>Téléphone :</b> +237 658637571</span>
              <span><b>Email :</b> nadiemlinck245@gmail.com</span>
              <span><b>Lieu :</b> Kotto, Douala</span>
            </div>
          </div>
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-blue-50 dark:border-gray-800">
            <Image src="/map-demo.png" alt="Carte" width={400} height={200} className="object-cover w-full h-48" />
          </div>
        </div>
      </main>
      <footer className="text-center py-6 bg-[#3c278d] text-white text-sm mt-8">
        &copy; {new Date().getFullYear()} PathFinder. Plateforme moderne pour l&#39;emploi tech.
      </footer>
    </div>
  );
}
