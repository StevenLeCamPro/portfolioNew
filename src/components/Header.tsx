"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Empêcher l'erreur SSR/CSR en attendant que le composant soit monté
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative w-full z-10 p-4 bg-transparent">
      {/* Ne pas afficher le SVG côté serveur pour éviter les erreurs de synchronisation */}
      {mounted && (
        <svg
          className="absolute top-0 left-0 w-full h-[15vh] transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(173, 216, 230, 0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(135, 206, 250, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(135, 206, 255, 0.4)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(70, 130, 220, 0.5)" />
          </g>
        </svg>
      )}

      <style jsx>{`
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        .parallax > use {
          animation: move-forever 50s cubic-bezier(.55, .5, .45, .5) infinite;
        }

        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 12s;
        }

        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 18s;
        }

        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 22s;
        }

        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 30s;
        }
      `}</style>

      <div className="relative z-10 flex items-center w-full">
        {/* Navigation Desktop */}
        <nav className="hidden md:flex w-full justify-center space-x-20">
          <Link href="/" className="font-quicksand duration-1000 hover:text-yellowgreen hover:translate-y-[-4px] text-white font-bold uppercase text-lg transition hover:text-yellowgreen" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Accueil
          </Link>
          <Link href="/about" className="font-quicksand duration-1000 hover:text-yellowgreen hover:translate-y-[-4px] text-white font-bold uppercase text-lg transition hover:text-yellowgreen" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            A propos
          </Link>
          <Link href="/projects" className="font-quicksand duration-1000 hover:text-yellowgreen hover:translate-y-[-4px] text-white font-bold uppercase text-lg transition hover:text-yellowgreen" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Projets
          </Link>
          <Link href="#footer" className="font-quicksand duration-1000 hover:text-yellowgreen hover:translate-y-[-4px] text-white font-bold uppercase text-lg transition hover:text-yellowgreen" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Contact
          </Link>
        </nav>

        {/* Menu burger pour mobile */}
        <div className="md:hidden flex justify-end w-full">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <nav
            className="absolute top-12 right-4 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col p-4 space-y-4 md:hidden"
            suppressHydrationWarning
          >
            <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link href="/about" className="text-lg" onClick={() => setIsOpen(false)}>A propos</Link>
            <Link href="/projects" className="text-lg" onClick={() => setIsOpen(false)}>Projets</Link>
            <Link href="#footer" className="text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
