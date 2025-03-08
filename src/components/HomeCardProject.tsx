import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const HomeCardProject: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="relative group w-[220px] h-[220px] lg:w-[320px] lg:h-[250px] rounded-xl overflow-hidden">
      {/* Image du projet */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay sombre + Texte caché par défaut */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-lg font-bold">{title}</p>
        <p className="text-white text-sm my-2">{description}</p>
        <div>
            <Link href={`/projects/${link}`} legacyBehavior>
            <a className="px-4 mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Voir le projet
            </a>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCardProject;
