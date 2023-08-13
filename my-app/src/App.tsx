import Internships from "./components/internships/Interships";
import ParticlesComponent from "./components/particles/Particles";
import "./App.css";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="test">
      <div className="content">
        <Internships />
        <Projects />
      </div>

      <div className="particles">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default App;
