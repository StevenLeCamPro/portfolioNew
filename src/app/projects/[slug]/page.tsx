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
    description: "Site réalisé durant mon stage de deuxième année.",
    image: "/DAG.png",
    link: "",
    type: "stage",
  },
  {
    slug: "pharminnov",
    name: "PharmInnov",
    title: "PharmInnov",
    description: "Pharmacie en click and collect.",
    image: "/pharminnov.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "uzbek-culture",
    name: "Uzbek Culture",
    title: "Uzbek Culture",
    description: "Site pour découvrir la culture ouzbek.",
    image: "/uzbek.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "acf2l",
    name: "ACF2L",
    title: "ACF2L",
    description: "Refonte d'un site d'aéroclub.\nSite de réservation d'UML.",
    image: "/acf2l.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "webdocumentaire",
    name: "Webdocumentaire",
    title: "Webdocumentaire",
    description: "Webdocumentaire réalisé auprès du comptoir d'Italie",
    image: "/webdoc.png",
    link: "",
    type: "projet scolaire",
  },
  {
    slug: "matos",
    name: "Matos",
    title: "Matos",
    description: "Site de réservation de matériel informatique.",
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
