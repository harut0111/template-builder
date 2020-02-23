import React from "react";
import "./style/index.scss";
import { StateProvider } from "./context";
import { initialState, reducer } from "./context/reducer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Main />
      </StateProvider>
    </div>
  );
}

export default App;
