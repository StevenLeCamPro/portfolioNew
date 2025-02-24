import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


import Image from "next/image";

interface CardProps {
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, link }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[100px] min-w-[100px] lg:h-[200px] lg:min-w-[200px] rounded-xl flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
            <motion.div
            className="z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
  className="bg-white font-semibold text-sm z-10 mx-1 py-2 px-2 rounded-full flex items-center gap-2 hover:bg-blue-200 origin-right hover:bg-gradient-to-tr from-blue-300 to-blue-500 whitespace-nowrap"
  initial={{ y: 10 }}
  animate={{ y: 0 }}
  exit={{ y: 10 }}
>
  <a href={link} className="flex items-center justify-center w-full">
    <span className="text-black">Voir la documentation</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="overflow-visible flex-shrink-0"
    >
      <path
        d="M19.071 4.929a10 10 0 1 0 0 14.142 10.011 10.011 0 0 0 0-14.142zm-1.414 12.728a8 8 0 1 1 0-11.314 8.01 8.01 0 0 1 0 11.314z"
      />
      <path d="M9 10h3.586l-4.293 4.293 1.414 1.414L14 11.414V15h2V8H9v2z" />
    </svg>
  </a>
</motion.h1>

            </motion.div>
        )}
      </AnimatePresence>
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;