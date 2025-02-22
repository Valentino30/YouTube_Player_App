import { Routes, Route } from "react-router";

import "./App.css";
import GIF from "./pages/GIF";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { routes } from "./consts/routes";

function App() {
  return (
    <Routes>
      <Route path={routes.Home.path} element={<Home />} />
      <Route path={routes.Video.path} element={<Video />} />
      <Route path={routes.GIF.path} element={<GIF />} />
    </Routes>
  );
}

export default App;
