import { useState } from "react"

import "./App.scss"
import MainPage from "./components/mainPage/MainPage";
import Header from "./components/header/Header";

function App() {

  const [pageState, setPageState] = useState("My Profile")

  const editState = (state) => {
    setPageState(state);
  }

  return (
    <div className="wholePage">
      <Header stateHandler={editState} curState={pageState} />
      <MainPage stateHandler={editState} curState={pageState} />
    </div>
  );
}

export default App;
