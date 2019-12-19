import React from "react";
import "./style/index.scss";
// import { StateProvider } from "./context";
// import { initialState, reducer } from "./context/reducer";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
