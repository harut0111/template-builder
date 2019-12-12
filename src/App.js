import React from "react";
import "./style/index.scss";
import { StateProvider } from "./context";
import { initialState, reducer } from "./context/reducer";
import Main from "./components/Main";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

export default App;
