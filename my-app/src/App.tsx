import './App.css';
import { useState } from "react"
import ParticlesBackground from './components/particles/Particles';


import Header from './components/header/Header';
import WelcomePage from './pages/welcome/WelcomePage';
import Internships from './components/internships/Interships';

function App() {
  const [curPage, setCurPage] = useState("WelcomePage")

  

  return (
    <div className='App.css'>
      <ParticlesBackground />
      <h1>Hello</h1>
      <Internships />
    </div>
  );
}

export default App;
