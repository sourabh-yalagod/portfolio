import { Zap } from "lucide-react";
import { portfolioData } from "../data/data";



const Experience = () => (
  <section className="py-20 px-6 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-white flex items-center gap-3">
        <Zap className="text-blue-400" size={32} /> Experience
      </h2>
      <p className="text-slate-400 mb-12">Professional experience in FinTech and full-stack development</p>
      
      {portfolioData.experience.map((exp, idx) => (
        <div key={idx} className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
            </div>
            <span className="text-slate-400 text-sm font-medium px-4 py-2 bg-slate-700 rounded-lg">{exp.period}</span>
          </div>
          <ul className="space-y-3">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;