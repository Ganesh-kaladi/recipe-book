import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AllContext from "./context/allContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllContext>
  </StrictMode>
);
