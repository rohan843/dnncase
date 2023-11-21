import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

import "./styles/index.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-complex-tree/lib/style-modern.css";

import "./styles/unreset.scss";
import { ReuseNode } from "./components/mainScreenComponents/workspace/fileTypeSpecificTabs/ModelCanvas/subcomponents/nodes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
