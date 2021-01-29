import React from "react";
import { Provider } from "react-redux";
import createStore from "../store/store";
import Routes from "../routes";

const store = createStore();
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
