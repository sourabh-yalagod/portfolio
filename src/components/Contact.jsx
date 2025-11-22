import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/data";


const Contact = () => (
  <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Let's Work Together</h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">Open to opportunities in full-stack development, distributed systems, and FinTech. Let's build something amazing together.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={`mailto:${portfolioData.email}`} className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            <Mail size={22} /> Send Email <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={portfolioData.linkedin} className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-300 hover:bg-slate-800">
            <Linkedin size={22} /> Connect on LinkedIn <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;