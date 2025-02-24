import React from 'react';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    type: string;
}

const projects: Project[] = [
    {
        title: "Comptoir de la Poste",
        description: "Site réalisé durant mon stage de deuxième année.",
        image: "/comptoir.png",
        link: "comptoir-de-la-poste",
        type: "stage",
    },
    {
        title: "Doc and Go",
        description: "Site réalisé durant mon stage de deuxième année.",
        image: "/DAG.png",
        link: "doc-and-go",
        type: "stage",
    },
    {
        title: "PharmInnov",
        description: "Pharmacie en click and collect.",
        image: "/pharminnov.png",
        link: "pharminnov",
        type: "projet scolaire",
    },
    {
        title: "Uzbek Culture",
        description: "Site pour découvrir la culture ouzbek.",
        image: "/uzbek.png",
        link: "uzbek-culture",
        type: "projet scolaire",
    },
    {
        title: "ACF2L",
        description: "Refonte d'un site d'aéroclub. Site de réservation d'UML.",
        image: "/acf2l.png",
        link: "acf2l",
        type: "projet scolaire",
    },
    {
        title: "Webdocumentaire",
        description: "Webdocumentaire réalisé auprès du comptoir d'Italie",
        image: "/webdoc.png",
        link: "webdocumentaire",
        type: "projet scolaire",
    },
    {
        title: "Matos",
        description: "Site de réservation de matériel informatique.",
        image: "/matos.png",
        link: "matos",
        type: "projet scolaire",
    },

];
interface ProjectsProps {
    selectedType: string;
}

const Projects: React.FC<ProjectsProps> = ({ selectedType }) => {
    const filteredProjects = selectedType === "all"
        ? projects
        : projects.filter(project => project.type === selectedType);

    return (
        <>
            {filteredProjects.map((project, index) => (
                <div key={index} className="relative group w-[320px] h-[220px] rounded-xl overflow-hidden">
                    {/* Image du projet */}
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    
                    {/* Overlay sombre + Texte caché par défaut */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-lg font-bold">{project.title}</p>
                        <p className="text-white text-sm mt-2">{project.description}</p>
                        <div className="flex items-center justify-center gap-4 mt-4">
                        
                        <Link href={`/projects/${project.link}`} legacyBehavior>
                        <a className="text-blue-400 hover:underline">Voir le projet</a>
                        </Link>
                
                        </div>
                    </div>
                </div>
            ))}
       </>
    );
};
   

export default Projects;