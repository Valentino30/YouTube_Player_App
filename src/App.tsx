import { Routes, Route } from "react-router";
import "./App.css";
import GIF from "./pages/GIF";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/gif" element={<GIF />} />
    </Routes>
  );
}

export default App;
