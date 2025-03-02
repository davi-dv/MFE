import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  console.log("cc");
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
