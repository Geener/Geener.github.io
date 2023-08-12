import Internships from "./components/internships/Interships";
import ParticlesComponent from "./components/particles/Particles";
import "./App.css";

const App = () => {
  return (
    <div className="test">
      <div className="content">
        <h1>Hello</h1>
        <Internships />
      </div>

      <div className="particles">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default App;
