import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { NavigationMenu } from "./components/Navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationMenu />
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
