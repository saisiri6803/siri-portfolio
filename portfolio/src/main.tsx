import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/main.scss";

import "./components/Header/Header.scss";
import "./components/Hero/HeroSection.scss";
import "./components/Projects/Projects.scss";
import "./components/About/About.scss";
import "./components/Contact/Contact.scss";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);