import Link from "next/link";
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

interface ProjectPageProps {
  params: {
    slug: string;
  };
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
];

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound(); // Gère automatiquement la page 404 de Next.js
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

          {project.link && (
            <Link
              href={project.link}
              className="text-blue-500 underline flex justify-end mt-2"
              target="_blank"
            >
              Voir le projet
            </Link>
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
