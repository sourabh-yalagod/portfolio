import { portfolioData } from "../data/data";

const Education = () => (
  <section className="py-20 px-6 bg-slate-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-white">Education</h2>
      
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-500 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">🎓</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{portfolioData.education.degree}</h3>
            <p className="text-purple-400 font-semibold mt-1">{portfolioData.education.institution}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-6 border-t border-slate-600">
          <span className="text-slate-400">{portfolioData.education.period}</span>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Cumulative GPA:</span>
            <span className="text-2xl font-bold text-blue-400">{portfolioData.education.cgpa}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;