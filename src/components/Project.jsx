import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data/data";


const Projects = () => (
  <section className="py-20 px-6 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
      <p className="text-slate-400 mb-12">Scalable systems handling high-frequency operations and real-time data</p>
      
      <div className="space-y-8">
        {portfolioData.projects.map((project, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-slate-800 to-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="p-8">
              <div className="mb-4">
                <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-400 font-semibold">{project.subtitle}</p>
              </div>
              
              <p className="text-slate-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <p className="text-slate-400 font-semibold mb-3">Key Achievements</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-400 font-semibold mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href={project.github} className="group/btn flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-blue-600 rounded-lg font-semibold text-white transition-all duration-300">
                  <Github size={20} /> GitHub <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a href={project.live} className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-semibold text-white transition-all duration-300">
                  <ExternalLink size={20} /> Live Demo <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;