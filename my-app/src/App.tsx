import Internships from "./components/internships/Interships";
import ParticlesComponent from "./components/particles/Particles";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech_stack/TechStack";
import ExtraCurriculars from "./components/extra_curriculars/ExtraCurriculars";
import "./App.css";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="test">
      <div className="content">
        <Profile />
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
