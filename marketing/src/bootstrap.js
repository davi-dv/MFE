console.log("hellooo");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start up the app
const mount = (el) => {
  return ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
