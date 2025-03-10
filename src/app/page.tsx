"use client";

import HomeCardProject from "@/components/HomeCardProject";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  const images = [
    { src: "/react.svg", name: "React.js", link: "https://react.dev/" },
    { src: "/symfony.svg", name: "PHP Symfony", link: "https://symfony.com/doc/current/index.html",},
    { src: "/nextjs.svg", name: "Next.js", link: "https://nextjs.org/docs" },
    { src: "/angular.svg", name: "Angular", link: "https://angular.dev/" },
    { src: "/tailwind.svg", name: "Tailwind", link: "https://v2.tailwindcss.com/docs", },
    { src: "/bootstrap.svg", name: "Bootstrap", link: "https://getbootstrap.com/", },
  ];

  const graphSkills = [
    { src: "/photoshop.svg", name: "PhotoShop", link: "https://helpx.adobe.com/fr/photoshop/user-guide.html" },
    { src: "/illustrator.svg", name: "Illustrator", link: "https://helpx.adobe.com/fr/illustrator/user-guide.html", },
    { src: "/premiere-pro.svg", name: "Premiere Pro", link: "https://helpx.adobe.com/fr/premiere-pro/user-guide.html",},
    { src: "/figma.svg", name: "Figma", link: "https://help.figma.com/hc/fr" },
  ];

  const gestionSkills = [
    { src: "/git.svg", name: "Git", link: "https://git-scm.com/doc" },
    { src: "/trello.svg", name: "Trello", link: "https://trello.com/guide" },
    { src: "/google-docs.svg", name: "Google Docs", link: "https://developers.google.com/docs?hl=fr", },
  ];

  const homeProjects = [
    {
      title: "Comptoir de la Poste",
      description: "Site réalisé durant mon stage de deuxième année.",
      image: "/ComptoirMockup.png",
      link: "/comptoir-de-la-poste",
    },
    {
      title: "Doc and Go",
      description: "Site réalisé durant mon stage de deuxième année.",
      image: "/DAGMockup.png",
      link: "/doc-and-go",
    },
    {
      title: "SAE 5.01 : PharmInnov",
      description: "Pharmacie en click and collect.",
      image: "/PharmInnovMockup.png",
      link: "/pharminnov",
    },
  ];

  return (
    <section className="flex flex-col items-center text-center py-10 relative">
      {/* Avatar */}
      <div className="relative w-60 h-60 lg:w-72 lg:h-72 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500"></div>
        <img
          src="/PDP.jpeg"
          alt="Photo de profil"
          className="w-48 h-48 lg:w-60 lg:h-60 rounded-full shadow-lg transition-transform duration-1000 relative z-0"
        />
      </div>

      {/* Titre et présentation */}
      <h1 className="text-blue-400 text-4xl font-bold mt-6">
        Bienvenue sur mon Portfolio !
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl">
        Bonjour ! Je m&apos;appelle Steven Le Cam, j&apos;ai 20 ans et je suis
        développeur full-stack. Passionné par le développement web, j&apos;ai
        réalisé quelques travaux que j&apos;aimerais vous montrer et vous
        expliquer. Mon portfolio met en avant mes projets, qui illustrent mon
        travail dans la création de sites web et d&apos;applications.
      </p>

      {/* Bouton de téléchargement du CV */}
      <Link
        href="/LeCamStevenCV.pdf"
        className="relative bg-blue-400 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500"
      >
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-blue-500 to-blue-400 transition-transform duration-500 ease-out"></span>
        <span className="relative z-10">Téléchargez mon CV</span>
      </Link>

      {/* Flèche vers la section projets */}
      <Link href="#projet">
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
      </Link>

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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-10 mt-6 place-items-center">
        {homeProjects.map((project, index) => (
          <HomeCardProject
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* Bouton Voir plus de projets */}
      <Link
        href="/projects"
        className="relative bg-blue-400 px-6 py-3 my-4 text-lg font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500"
      >
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right bg-gradient-to-r from-blue-400 to-blue-500 transition-transform duration-500 ease-out"></span>
        <span className="relative z-20 block">Voir plus de projets</span>
      </Link>

      <div className="flex flex-col items-center text-center py-10 relative">
  <h1 className="text-blue-400 text-4xl font-bold mt-6">Mes Compétences</h1>

  <div className="w-full">
      <h1 className="text-blue-600 text-2xl text-left font-bold">Langues parlées</h1>
      <div className="flex lg:flex-row flex-col items-center lg:items-start mt-20 space-y-10 lg:space-y-0 lg:space-x-20">
      <div className="flex flex-col items-center">
        <img src="/france.png" alt="Français" className="w-32 h-32 animate-bounce" />
        <p className="text-lg text-gray-600">Français</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/royaume-uni.png" alt="Anglais" className="w-32 h-32 animate-bounce" />
        <p className="text-lg text-gray-600">Anglais</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/allemagne.png" alt="Allemand" className="w-32 h-32 animate-bounce" />
        <p className="text-lg text-gray-600">Allemand</p>
      </div>
      </div>
    </div>
    
  <div className="flex flex-col w-full mt-10 space-y-10 lg:space-x-0">
    {/* Développement Web */}
    <div className="w-full">
      <h1 className="text-blue-600 text-2xl text-left font-bold">Développement Web</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 mt-2">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <Card image={image.src} link={image.link} />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">{image.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Graphisme */}
    <div className="w-full">
      <h1 className="text-blue-600 text-2xl text-left font-bold">Graphisme</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 mt-2">
        {graphSkills.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <Card image={image.src} link={image.link} />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">{image.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Gestion de projet */}
    <div className="w-full">
      <h1 className="text-blue-600 text-2xl text-left font-bold">Gestion de projet</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 mt-2">
        {gestionSkills.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <Card image={image.src} link={image.link} />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">{image.name}</p>
          </div>
        ))}
      </div>
    </div>

   
  </div>
</div>

    </section>
  );
}
