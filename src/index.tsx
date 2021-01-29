import React from "react";
import ReactDOM from "react-dom";
//import polyFill from "./polyfills";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"), () => {
  console.log(`app rendered`);
});
