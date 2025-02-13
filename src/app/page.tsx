"use client";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-10 relative">
      <div className="relative w-72 h-72 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500 animate-waves"></div>
        <img
          src="/PDP.jpeg"
          alt="Photo de profil"
          className="w-30 h-30 xl:w-60 xl:h-60 rounded-full shadow-lg transition-transform duration-1000 relative z-0"
        />
      </div>

      {/* Titre et présentation */}
      <h1 className="text-blue-400 text-4xl font-bold mt-6">
        Bienvenue sur mon Portfolio !
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl">
        Bonjour ! Je m'appelle Steven Le Cam, j’ai 21 ans et je suis développeur
        full-stack. Passionné par le développement web, j'ai réalisé quelques
        travaux que j'aimerais vous montrer et vous expliquer. Mon portfolio met
        en avant mes projets, qui illustrent mon travail dans la création de
        sites web et d'applications. Il met en évidence ma créativité et mes
        compétences dans le domaine du développement.
      </p>

      <a
        href="/LeCamStevenCV.pdf" // Assure-toi que le fichier est bien dans le dossier public
        className="relative bg-blue-300 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500"
        download
      >
        {/* Effet de hover en arrière-plan qui démarre de la gauche */}
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-blue-500 to-blue-300 transition-transform duration-500 ease-out"></span>

        {/* Texte au premier plan */}
        <span className="relative z-10">Téléchargez mon CV</span>
      </a>

      <a href="#projet">
        <svg
          className="w-6 h-6 mt-2 text-blue-600 group-hover:text-white animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>

      {/* Style de l'animation des vagues */}
      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        .animate-waves {
          animation: waveAnimation 5s infinite ease-in-out;
        }
      `}</style>

      <h1 className="text-blue-400 text-4xl font-bold mt-6" id="projet">
        Mes projets
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl">
        Voici un aperçu de mes projets
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 place-items-center">
        {/* Première carte */}
        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
          {/* Image du projet */}
          <img
            src="/ComptoirMockup.png"
            alt="Comptoir de la Poste"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay sombre + Texte caché par défaut */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg font-bold">Comptoir de la Poste</p>
            <p className="text-white text-sm mt-2">
              Projet de stage de deuxième année
            </p>
          </div>
        </div>

        {/* Deuxième carte */}
        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
          {/* Image du projet */}
          <img
            src="/DAGMockup.png"
            alt="Doc and Go"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay sombre + Texte caché par défaut */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg font-bold">DOC AND GO</p>
            <p className="text-white text-sm mt-2">
              Projet de stage de deuxième année
            </p>
          </div>
        </div>

        {/* Troisième carte */}
        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden ">
          {/* Image du projet avec taille réduite */}
          <img
            src="/PharmInnovMockup.png"
            alt="PharmInnov"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay sombre + Texte caché par défaut */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg font-bold">
              SAE 5.01 : PharmInnov
            </p>
            <p className="text-white text-sm mt-2">Projet de cours</p>
          </div>
        </div>
      </div>
      <a className="relative bg-blue-300 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500">
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right bg-gradient-to-r from-blue-300 to-blue-500 transition-transform duration-500 ease-out"></span>
        <span className="relative z-20 block">Voir plus de projets</span>
      </a>
    </section>
  );
}
