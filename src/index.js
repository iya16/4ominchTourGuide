import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from "./App";
import Ppa from "./Ppa";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Ppa />
  </StrictMode>
);
