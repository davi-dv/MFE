import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "../components/Landing";
import Pricing from "../components/Pricing";

const generatedClassName = createGenerateClassName({
  productionPrefix: "ma",
});
export default ({ history }) => {
  console.log("teste s3");
  return (
    <div>
      <StylesProvider generateClassName={generatedClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
