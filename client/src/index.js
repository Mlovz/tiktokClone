import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
