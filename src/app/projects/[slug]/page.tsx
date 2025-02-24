import { notFound } from "next/navigation";

interface Project {
  slug: string;
  name: string;
  title: string;
  image?: string;
  link?: string;
  description: string;
  technologies?: string[];
  type: string;
}

const projects: Project[] = [
  {
    slug: "comptoir-de-la-poste",
    name: "Comptoir de la Poste",
    title: "Comptoir de la Poste",
    description: `Le Comptoir de la Poste est un site de réservation de table de restaurant en ligne. Il permet aussi de consulter des menus et des produits, et ainsi voir le prix de chaque menu.

Les gérants du restaurant peuvent ajouter un menu avec une date de validité afin de le changer comme bon leur semble.

J'ai réalisé ce site en 2 semaines lors d'un stage, en toute autonomie, et en ayant appris les bases de Symfony la semaine d'avant. Je suis très fier de ce travail, car j'ai réussi à réaliser un site complet en si peu de temps.

Le site a été réalisé à l'aide de Symfony et Twig.`,
    image: "/comptoir.png",
    link: "http://comptoirdelaposte.fr/",
    type: "stage",
  },
  {
    slug: "doc-and-go",
    name: "Doc and Go",
    title: "Doc and Go",
    description: `Doc and Go est un site de réservation de rendez-vous médicaux en ligne. Il permet de consulter les médecins disponibles, de voir leurs horaires, et de réserver un rendez-vous.
   
    J'ai travaillé sur ce site durant mon stage de deuxième année, la première mission que j'ai eue a été de rendre le site responsive. J'ai ensuite travaillé sur la partie back-end, en ajoutant des fonctionnalités, et en corrigeant des bugs.

    Doc And Go avait pour but d'être utilisé en Roumanie, mais le projet n'ets pas fini, et n'a pas été mis en production.

    Sur ce projet, nous étions plusieurs à travailler dessus, et nous utilisions Symfony et Twig, c'est pourquoi je remercie Inès Temmar, Yaëlle Jehu et Victoria Moukielo pour leur aide sans faille.
    `,
    image: "/DAG.png",
    link: "http://82.65.225.53/doc-and-go/public/",
    type: "stage",
  },
  {
    slug: "pharminnov",
    name: "PharmInnov",
    title: "PharmInnov",
    description: `PharmInnov est une pharmacie en click and collect qui permet aux patients de visualiser la disponibilité des médicaments et de les commander. Le site repose sur une fonctionnalité complexe : la transformation d'un fichier PDF en objets (médicaments et commandes).  
    
    C'est un projet universitaire donc je suis le chef de projet. J'ai donc été en charge de la répartition des tâches, de la communication avec les clients (professeurs), et de la réalisation de certaines fonctionnalités.
    
    Actuellement nous travaillons sur l'application mobile de ce site qui sera faite en React Native, tandis que le site est réalisé en Symfony et React.js.
    
    C'est l'un des projets les plus importants et complexes que j'ai réalisé, et je suis très fier du travail que nous avons accompli. Merci à Tom Prot et Nicolas Marly pour leur travail acharné.`,
    image: "/pharminnov.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "uzbek-culture",
    name: "Uzbek Culture",
    title: "Uzbek Culture",
    description: `Ce site est un projet scolaire regroupant plusieurs matières, le but était de faire découvrir une culture "inconnue" dans le monde. Nous avons, avec mon camarade Antoine Moulin, choisi la culture ouzbek.
    
    Ce site regroupe donc une préentation de la culture ouzbek, plus particulièrement l'architecture. Nous avons intégré un modèle 3D dans ce site, un modèle que nous avons crée nous-même, le minaret Khalon de Boukhara.

    Ce n'est pas un projet qui présente énormément de fonctionnalités complexes, c'est pourquoi il a été fait en html, css et javascript, étant donné que le but preier n'était pas de créer un site complexe, mais plutôt un site informatif sur une culture peu connue.
    
    Ce site a été accompagné d'une présentation orale avec un support visuel, et a été noté en conséquence.
    `,
    image: "/uzbek.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "acf2l",
    name: "ACF2L",
    title: "ACF2L",
    description: `L’Aéro-Club de Frotey-les-Lures (ACF2L) est une association aéronautique dédiée à la promotion et au développement de la pratique de l’aviation au sein de sa communauté. Elle est née d’une fusion de l'Aéro-Club de l'Ill à Vesoul et de l'Aéro-Club Marin-La-Meslée à Frotey-les-Lure, au sein de l'Association des Aéro-Clubs de la Bourgogne-Franche-Comté. 
    
    Pour ce travail nous avons été commissionnés par l'ACF2L pour refaire leur site internet. Nous avons donc réalisé un site de réservation de vol en ligne, avec un back-office pour les administrateurs en php, et un front-office pour les utilisateurs en html, css et javascript.
    
    Sur ce projet, j'ai été en charge de la prtie front-end ainsi que du responsive. Nous étions 4 sur la réalisation de ce projet universitaire de 2ème année : Alexandre Guedes, Timothé Hege, Arnaud Royer et moi-même.`,
    image: "/acf2l.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "webdocumentaire",
    name: "Webdocumentaire",
    title: "Webdocumentaire",
    description: `Ce webdocumentaire est un projet universitaire de deuxième année. Il a été réalisé avec l'aide du Comptoir d'Italie, une épicerie italienne situé à Meaux. Le but était de mettre en avant le restaurant, son histoire, ses plats, et son équipe. Nous avons donc réalisé un site en html, css et javascript, sans framework. Nous étions 4 sur ce projet : Alexandre Guedes, Jaraf Gueye, Sanjy Boot et moi-même. 
    
    Ce projet est inter-matières, il regroupe l'expression-communication avec la rédaction des plusieurs articles sur l'établissement, l'audiovisuel avec les prise de vue du restaurant ainsi que l'interview du gérant, le montage vidéo de celle-ci, sans oublier l'anglais pour la traduction des sous-titres et enfin le développement web du site en lui-même.

    Nous avons donc pu mettre en pratique plusieurs aspect de notre formation et mettre à bien nos connaissances afin de réaliser un projet polyvalent et complet.
    `,
    image: "/webdoc.png",
    link: "https://guedesalexandre.github.io/Webdoc/",
    type: "projet scolaire",
  },
  {
    slug: "matos",
    name: "Matos",
    title: "Matos",
    description: `Matos est un projet universitaire de première année. Il s'agit d'un site de réservation du matériel ifromatique de l'école. Nous avons réalisé ce site en html, css et javascript, sans framework.
    
    Nous étions 3 sur ce projet : Alexandre Guedes, Arnaud Royer et moi-même. J'ai étét chargé de la partie front-end du projet, ainsi que du graphisme, ce qui contient la création du logo, le choix des couleurs, de la charte graphique et de la maquette.
    
    C'est le premier projet collaboratif que nous avons dû réaliser durant notre cursus, cela a été un moment charnière dans mon apprentissage car ce site regroupe toutes les bases dont j'avais besoin pour passer en deuxième année`,
    image: "/matos.png",
    link: "",
    type: "projet scolaire",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  console.log("Params:", resolvedParams); // Debug: voir ce que Next.js envoie

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page mx-auto p-6 h-full bg-almond">
      <h1 className="font-bold text-gray-800 mt-8 text-center text-4xl mb-14">
        {project.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-6">
        <div>
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 text-justify whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bouton centré sous les deux divs */}
      {project.link && project.link.trim() !== "" && (
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href={project.link}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
