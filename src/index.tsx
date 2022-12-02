import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMentor from "./AppMentor";
import AppMentors from "./AppMentors";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppMentor /> */}
    <AppMentors />
  </React.StrictMode>
);
