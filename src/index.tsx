import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

createRoot(document.querySelector<HTMLDivElement>("#root")!)
  .render(<App/>);