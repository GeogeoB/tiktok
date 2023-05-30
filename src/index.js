import React from "react";
import ReactDOM from "react-dom/client";
import "./css/root.css";
import "./css/index.css";
import App from "./App";
import { MyContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MyContextProvider>
      <App />
    </MyContextProvider>
);
