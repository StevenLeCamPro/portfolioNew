import React from 'react';

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
        image: "/ComptoirMockup.png",
        link: "",
        type: "stage",
    },
    {
        title: "Doc and Go",
        description: "Site réalisé durant mon stage de deuxième année.",
        image: "/DAGMockup.png",
        link: "",
        type: "stage",
    },
    {
        title: "SAE 5.01 : PharmInnov",
        description: "Pharmacie en click and collect.",
        image: "/PharmInnovMockup.png",
        link: "",
        type: "projet scolaire",
    },
    {
        title: "SAE 4.02",
        description: "Site pour découvrir la culture ouzbek.",
        image: "/PharmInnovMockup.png",
        link: "",
        type: "projet scolaire",
    },
    {
        title: "SAE 3.01 : ACF2L",
        description: "Refonte d'un site d'aéroclub. Site de réservation d'UML.",
        image: "/DAGMockup.png",
        link: "",
        type: "projet scolaire",
    },
    {
        title: "SAE 3.02 : Webdocumentaire",
        description: "Webdocumentaire réalisé auprès du comptoir d'Italie",
        image: "/PharmInnovMockup.png",
        link: "",
        type: "projet scolaire",
    },
    {
        title: "SAE 2.03 : Matos",
        description: "Site de réservation de matériel informatique.",
        image: "/PharmInnovMockup.png",
        link: "",
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
                            <a href={project.link} className="text-blue-400 hover:underline">Voir le projet</a>
                        </div>
                    </div>
                </div>
            ))}
       </>
    );
};
   

export default Projects;