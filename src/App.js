import { useState } from "react"


import classes from "./App.module.css"
import MainPage from "./mainPage/MainPage";
import Header from "./header/Header";

function App() {

  const [pageState, setPageState] = useState("projects")

  const editState = (state) => {
    console.log(state)
    setPageState(state);
  }

  return (
    <div className={classes.wholePage}>
      <Header stateHandler={editState} curState={pageState} />
      <MainPage state={pageState} />
    </div>
  );
}

export default App;
