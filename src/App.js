import { useState } from "react"

import classes from "./App.module.scss"
import MainPage from "./components/mainPage/MainPage";
import Header from "./components/header/Header";

function App() {

  const [pageState, setPageState] = useState("profile")

  const editState = (state) => {
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
