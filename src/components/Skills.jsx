import { Code2, Zap, Database, Cloud, GitBranch, Brain } from "lucide-react";
import { portfolioData } from "../data/data";

const skillIcons = {
  frontend: <Code2 className="text-blue-400" size={24} />,
  backend: <Zap className="text-yellow-400" size={24} />,
  databases: <Database className="text-green-400" size={24} />,
  cloud: <Cloud className="text-purple-400" size={24} />,
  devops: <GitBranch className="text-orange-400" size={24} />,
  corecs: <Brain className="text-pink-400" size={24} />,
};

const colorMap = {
  frontend:
    "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400",
  backend:
    "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-400",
  databases:
    "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400",
  cloud:
    "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400",
  devops:
    "from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-400",
  corecs:
    "from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-400",
};

const Skills = () => (
  <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-1 h-10 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Skills
          </h2>
          <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-lg mt-6">
          Core competencies across full-stack development
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
          <div
            key={idx}
            className={`group relative bg-gradient-to-br ${colorMap[category]} border rounded-xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-current/20 hover:scale-105 cursor-pointer overflow-hidden`}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-slate-700/50 transition-all duration-300">
                  {skillIcons[category]}
                </div>
                <h3 className="font-bold text-slate-200 text-base uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
              </div>

              {/* Skills Text */}
              <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-100 transition-colors duration-300 line-clamp-4">
                {skills}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-current to-transparent rounded-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-2 gap-6">
        {[
          { label: "Tech Stack", value: "15+" },
          { label: "FUll stack Projects", value: "10+" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg p-6 text-center transition-all duration-300 hover:bg-slate-800"
          >
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
