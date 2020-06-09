import React from "react";
import ReactDOM from "react-dom";

import Component from "./components/Component";

const injectProps = {
  commonProp: 599,
  commonFunc: () => true,
  asyncFunc: async () => 4,
  conditionalFunc: () => true,
};

ReactDOM.render(
  <Component {...injectProps} />,
  document.getElementById("root")
);
