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
    description: "Site réalisé durant mon stage de deuxième année.",
    image: "/comptoir.png",
    link: "",
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
    description: "Refonte d'un site d'aéroclub. Site de réservation d'UML.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-6">
        <div>
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          )}

          {project.link && project.link.trim() !== "" && (
            <a
              href={project.link}
              className="text-blue-500 underline flex justify-end mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4 text-justify">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
