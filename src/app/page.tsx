"use client";

import Card from "@/components/Card";
import { link } from "fs";

export default function Home() {
  const images = [
    { src: "/PDP.jpeg", name: "Steven Le Cam" , link: "https://www.linkedin.com/in/steven-le-cam/"},
    { src: "/PharmInnovMockup.png", name: "PharmInnov" , link: "https://www.wikipedia.fr"},
    { src: "/vercel.svg", name: "Vercel", link: "https://www.vercel.com"},
    { src: "/window.svg", name: "Window" , link: "https://www.microsoft.com"},
    { src: "/ComptoirMockup.png", name: "Comptoir de la Poste",  link: "https://www.comptoirdelaposte.fr"},
    { src: "/DAGMockup.png", name: "Doc and Go" , link: "https://www.docandgo.fr"},
  ];

  return (
    <section className="flex flex-col items-center text-center py-10 relative">
      {/* Avatar */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500"></div>
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
        sites web et d'applications.
      </p>

      {/* Bouton de téléchargement du CV */}
      <a
        href="/LeCamStevenCV.pdf"
        className="relative bg-blue-300 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500"
        download
      >
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-blue-500 to-blue-300 transition-transform duration-500 ease-out"></span>
        <span className="relative z-10">Téléchargez mon CV</span>
      </a>

      {/* Flèche vers la section projets */}
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

      {/* Animation des vagues */}
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

      {/* Section projets */}
      <h1 className="text-blue-400 text-4xl font-bold mt-6" id="projet">
        Mes projets
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl">
        Voici un aperçu de mes projets
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 place-items-center">
        {/* Cartes projets */}
        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
          <img
            src="/ComptoirMockup.png"
            alt="Comptoir de la Poste"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
          <img
            src="/DAGMockup.png"
            alt="Doc and Go"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
          <img
            src="/PharmInnovMockup.png"
            alt="PharmInnov"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Bouton Voir plus de projets */}
      <a className="relative bg-blue-300 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500">
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right bg-gradient-to-r from-blue-300 to-blue-500 transition-transform duration-500 ease-out"></span>
        <span className="relative z-20 block">Voir plus de projets</span>
      </a>

        <div className="flex flex-col items-center text-center py-10 relative">
      <h1 className="text-blue-400 text-4xl font-bold mt-6" id="projet">
        Mes Compétences
      </h1>
      {/* Carrousel infini sans animation */}
      <div className="flex gap-4 mt-10">
      
        {images.map((image, index) => (
          <>
          <div className="flex flex-col items-center text-center">
          <Card image={image.src} key={index} link={image.link} />
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">{image.name}</p>
          </div>
          </>
        ))}
      </div>
      </div>
    </section>
  );
}
