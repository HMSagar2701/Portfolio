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
    description: "Portfolio Website built with NextJS",
    url: "https://sagar-portfolio-beta.vercel.app/",
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects and Case Studies
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Explore a selection of live projects across Web3, SaaS, and creative design—each built with performance and user experience in mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-zinc-900 to-gray-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition duration-300 ease-in-out"
            >
              <div className="relative w-full h-[220px] bg-black">
                <div
                  className="origin-top-left scale-[0.25] w-[1615px] h-[900px] pointer-events-none"
                  style={{ transformOrigin: "top left" }}
                >
                  <iframe
                    src={project.url}
                    title={project.title}
                    width="1200"
                    height="900"
                    className="border-none w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 h-[220px] pointer-events-none" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-cyan-300">
                    {project.title}
                  </h3>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 text-cyan-500 hover:text-white" />
                  </Link>
                </div>
                <p className="text-sm font-medium text-gray-400 mb-1">{project.category}</p>
                <p className="text-sm text-gray-300 leading-snug">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://github.com/HMSagar2701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-cyan-400 underline underline-offset-4 hover:text-white text-lg"
          >
            Explore More Projects on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}
