"use client";

import React, { useState } from "react";
import Projects from "../projects";

const ProjectsPage: React.FC = () => {
    const [selectedType, setSelectedType] = useState("all");

    return (
        <section className="flex flex-col items-center text-center py-10 relative">
            {/* Sélecteur de filtre */}
            <div className="mb-6 text-black">
                <select
                    className="p-2 border rounded-lg"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="all">Tous les projets</option>
                    <option value="projet scolaire">Projets scolaires</option>
                    <option value="stage">Stages</option>
                </select>
            </div>

            {/* Grille des projets filtrés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 place-items-center">
                <Projects selectedType={selectedType} />
            </div>
        </section>
    );
};

export default ProjectsPage;
