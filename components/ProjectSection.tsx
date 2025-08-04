// components/CaseStudiesSection.tsx

import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SaaS Landing 1",
    category: "Landing Page",
    description: "Clean SaaS landing page with modern UI/UX.",
    url: "https://saas-1-one.vercel.app/",
  },
  {
    title: "SaaS Landing 2",
    category: "Landing Page",
    description: "Responsive SaaS homepage built for conversion.",
    url: "https://saas-2-sagar.vercel.app/",
  },
  {
    title: "Multimedia Showcase",
    category: "Creative Design",
    description: "Showcase for multimedia platform with interactive design.",
    url: "https://multimedia-theta.vercel.app/",
  },
  {
    title: "Dizneo",
    category: "Digital Marketing",
    description: "Digital marketing website focused on brand presence and performance.",
    url: "https://www.dizneo.com/",
  },
  {
    title: "Solana Walk",
    category: "Web3 Full Stack",
    description: "Full stack DApp for walking rewards on Solana blockchain.",
    url: "https://sol-walk.vercel.app/",
  },
  {
    title: "Portfolio Website",
    category: "NextJS Full Stack",
    description: "Portfolio Website built with NextJS.",
    url: "https://sagar-portfolio-beta.vercel.app/",
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects and Case Studies
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
          Explore a selection of live projects across Web3, SaaS, and creative design—each built with performance and user experience in mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-md hover:shadow-cyan-500/20 transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                <iframe
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-300">
                    {project.title}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400 hover:text-white" />
                  </Link>
                </div>
                <p className="text-sm text-gray-400">{project.category}</p>
                <p className="text-sm text-gray-300 leading-snug">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="https://github.com/HMSagar2701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-cyan-400 hover:text-white underline underline-offset-4 text-base sm:text-lg transition"
          >
            Explore More Projects on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}
