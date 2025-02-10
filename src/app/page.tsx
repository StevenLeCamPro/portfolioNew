'use client';

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
  <h1 className="text-blue-400 text-4xl font-bold mt-6">Bienvenue sur mon Portfolio !</h1>
  <p className="text-lg text-gray-600 mt-4 max-w-2xl">
  Bonjour !

Je m'appelle Steven Le Cam, j’ai 21 ans et je suis développeur full-stack. Passionné par le développement web, j'ai réalisé quelques travaux que j'aimerais vous montrer et vous expliquer.

Mon portfolio met en avant mes projets, qui illustrent mon travail dans la création de sites web et d'applications. Il met en évidence ma créativité et mes compétences dans le domaine du développement.
  </p>

  <a
  href="/LeCamStevenCV.pdf"   // Assure-toi que le chemin d'accès est correct
  className="relative bg-blue-300 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500"
  download
>
  <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
  <span className="relative z-10">Téléchargez mon CV</span>
</a>

<a href="#" className="scroll-smooth">
  <svg
    className="w-6 h-6 mt-2 text-blue-600 group-hover:text-white animate-bounce"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
</section>

  );
}

