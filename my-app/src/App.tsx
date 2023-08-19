import Internships from "./components/internships/Interships";
import ParticlesComponent from "./components/particles/Particles";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech_stack/TechStack";
import ExtraCurriculars from "./components/extra_curriculars/ExtraCurriculars";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="test">
      <Navbar />
      <div className="content">
        <Internships />
        <Projects />
        <ExtraCurriculars />
        <TechStack />
      </div>

      <div className="particles">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default App;
