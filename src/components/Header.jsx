import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "../data/data";

const Header = () => (
  <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 border-b border-slate-700">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          {portfolioData.name}
        </h1>
        <p className="text-xl text-slate-300 mb-6">{portfolioData.title}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <a
          href={`mailto:${portfolioData.email}`}
          className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
        >
          <Mail size={20} className="text-blue-400" /> {portfolioData.email}
        </a>
        <div className="flex items-center gap-2 text-slate-300">
          <Phone size={20} className="text-blue-400" /> {portfolioData.phone}
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin size={20} className="text-blue-400" />{" "}
          {portfolioData.location}
        </div>
      </div>

      <div className="flex justify-center gap-6 pt-6">
        <a
          href={portfolioData.github}
          className="group flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <Github size={22} /> GitHub{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
        <a
          href={portfolioData.linkedin}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <Linkedin size={22} /> LinkedIn{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
