import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

// mount function to start up the app
const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      console.log(nextPathName, "next path no auth");
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
      console.log("Container just navigated", Location);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
