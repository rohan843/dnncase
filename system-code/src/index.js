import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import './styles/unreset.scss'

import "./styles/index.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-complex-tree/lib/style-modern.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
