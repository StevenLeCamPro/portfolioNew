import React from 'react'

const veilleInfos = [
    {
      id: 1,
      title: "Symfony 7.2 : Quelles nouveautés en 2025 ?",
      date: "30 Janvier 2025",
      source: "https://drosalys.fr/les-nouveautes-de-symfony-7-2-ce-quil-faut-savoir-en-2025/",
      author: "Drosalys",
      screenShot: "/symfonyNews.png",
      summary: "Découvrez les principales améliorations de Symfony 7.2 et comment elles impactent vos projets."
    },
    {
      id: 2,
      title: "Twig 4 : Les Attendus",
      date: "15 Mai 2024",
      source: "https://www.itefficience.com/article/twig-4-ce-que-lon-pourrait-attendre",
      author : "Manon Lamarre - IT Efficience",
      screenShot: "/twig4.png",
      summary: "Twig 4 : Ce que l'on pourrait attendre"
    },
    {
      id: 3,
      title: "Meilleurs bundles Symfony",
      date: "16 Mai 2024",
      source: "https://www.itefficience.com/article/les-bundles-les-plus-utilises-dans-les-projets-symfony",
      author : "Fiona Desamblanc-Merchadier - IT Efficience",
      screenShot: "/bundle.png",
      summary: "Les bundles les plus utilisés dans les projets Symfony."
    },
    {
      id: 4,
      title: "Symfony 7.2.4 released",
      date: "26 Février 2025",
      source: "https://symfony.com/blog/symfony-7-2-4-released",
      author : "Fabien Potencier",
      screenShot: "/released.png",
      summary: "Les dernières informations concernant la mise à jour 7.2.4 de Symfony."
    }
  ];

  const VeilleCard = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 mt-10">Veille Technologique : PHP Symfony</h1>
        <p className="text-gray-600 text-center mb-8">
          J'ai choisi de faire ma veille technologique sur PHP Symfony car c'est un langage que j'aime particulièrement. Plus tard, je compte mettre en relation tous les langages que j'aime autour d'une interface de veille technologique. En attendant, voici quelques articles que j'ai apprécié lire récemment.
        </p>
        <div className="grid gap-6">
          {veilleInfos.map((article) => (
            <div key={article.id} className="p-4 border border-blue-500 rounded-lg shadow-md hover:shadow-lg transition relative">
              <h2 className="text-xl font-semibold text-black">{article.title}</h2>
              <p className="text-sm text-gray-500">{article.date}</p>
              
              <div className="relative group">
                {/* Image avec superposition */}
                <img src={article.screenShot} alt={article.title} className="w-full object-cover rounded-lg mt-4" />
                
                {/* Superposition noir avec le bouton */}
                <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Cliquez pour lire l'article 📖
                  </a>
                </div>
              </div>
    
              <p className="mt-2 text-gray-700">{article.summary}</p>
              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative group"
              >
                📖 Lire l'article →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
    
    
  };
export default VeilleCard;