import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Project";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
