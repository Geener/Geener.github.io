import Internships from "./components/internships/Interships";
import ParticlesComponent from "./components/particles/Particles";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech_stack/TechStack";
import ExtraCurriculars from "./components/extra_curriculars/ExtraCurriculars";
import { useState } from "react";
import "./App.css";
import InternshipInfo from "./components/internship_info.tsx/InternshipInfo";

const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="test">
      {!isInfoOpen && (
        <div className="content">
          <Internships setIsInfoOpen={setIsInfoOpen} />
          <Projects />
          <ExtraCurriculars />
          <TechStack />
        </div>
      )}

      {isInfoOpen && <InternshipInfo setIsInfoOpen={setIsInfoOpen} />}

      <div className="particles">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default App;
