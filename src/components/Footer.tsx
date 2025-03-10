"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer id="footer">
      <div className="bg-blue-400 w-5/6 h-0.5 opacity-10 text-center mx-auto"></div>
      <section className="bg-cyan-200">
        <div
          className={`
            max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8
            ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }
            transition-all duration-1000 ease-out
          `}
        >
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                href="/"
                className="text-base leading-6 text-gray-500 
                hover:bg-clip-text hover:text-transparent 
                hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
                hover:text-xl transition-all duration-300"
              >
                Accueil
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="#"
                className="text-base leading-6 text-gray-500 
                hover:bg-clip-text hover:text-transparent 
                hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
                hover:text-xl transition-all duration-300"
              >
                À propos
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="#"
                className="text-base leading-6 text-gray-500 
                hover:bg-clip-text hover:text-transparent 
                hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
                hover:text-xl transition-all duration-300"
              >
                Projets
              </Link>
            </div>
          </nav>

          <div className="flex justify-center mt-8 space-x-6">
            {/* GitHub */}
            <Link
              href="https://github.com/StevenLeCamPro"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 
              transform hover:scale-110 hover:rotate-12 
              transition-all duration-500 ease-in-out 
              hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-900"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.311.468-2.382 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.518 11.518 0 013.003-.404c1.019.004 2.045.138 3.002.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.243 2.873.12 3.176.77.839 1.236 1.91 1.236 3.221 0 4.61-2.805 5.624-5.475 5.92.43.372.815 1.103.815 2.222v3.293c0 .319.192.694.8.576C20.565 22.093 24 17.595 24 12.297c0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/steven-le-cam/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 
              transform hover:scale-110 hover:rotate-12 
              transition-all duration-500 ease-in-out 
              hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.23 0H1.77C.79 0 0 .775 0 1.728v20.544C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.728V1.728C24 .775 23.21 0 22.23 0zM7.06 20.452H3.56V9.014h3.5v11.438zM5.31 7.56a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zm15.142 12.892h-3.5v-5.563c0-1.33-.023-3.04-1.854-3.04-1.855 0-2.14 1.45-2.14 2.946v5.657h-3.5V9.014h3.36v1.564h.048c.47-.89 1.62-1.828 3.337-1.828 3.567 0 4.224 2.348 4.224 5.404v6.298z"
                ></path>
              </svg>
            </Link>

             {/* Email */}
             <Link
              href="mailto:steven.lecam21@gmail.com"
              className="text-gray-400 hover:text-gray-500 
              transform hover:scale-110 hover:rotate-12 
              transition-all duration-500 ease-in-out 
              hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500"
            >
              <span className="sr-only">Email</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v16h16V4H4zm8 6l8-4v12H4V6l8 4z"></path>
              </svg>
            </Link>
            {/* Téléphone */}
            <Link
              href="tel:+33615803612"
              className="text-gray-400 hover:text-gray-500 
              transform hover:scale-110 hover:rotate-12 
              transition-all duration-500 ease-in-out 
              hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700"
            >
              <span className="sr-only">Téléphone</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.21c1.12.45 2.33.69 3.59.69.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3.5 2 2.95 2.45 2.5 3 2.5H6.5c.55 0 1 .45 1 1 0 1.26.24 2.47.69 3.59.14.34.06.73-.21 1.11l-2.2 2.2z"
                />
              </svg>
            </Link>
          </div>

          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © {new Date().getFullYear()} - Steven Le Cam.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
