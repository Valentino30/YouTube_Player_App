import { useState } from "react";
import { useNavigate } from "react-router";

import Input from "../components/Input";
import Button from "../components/Button";
import { isValidYouTubeUrl } from "../utils/utils";

export default function Home() {
  const navigate = useNavigate();
  const [youtubeURL, setYoutubeURL] = useState("");

  const handleSave = () => {
    const isValidUrl = isValidYouTubeUrl(youtubeURL);
    if (isValidUrl) {
      setYoutubeURL("");
      localStorage.setItem("playbackTime", "0");
      localStorage.setItem("youtubeURL", youtubeURL);
      navigate("/video");
    } else {
      alert("Invalid YouTube URL");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen gap-4">
      <Input type="text" value={youtubeURL} placeholder="YouTube URL" onChange={(e) => setYoutubeURL(e.target.value)} />
      <Button name="Save" onClick={handleSave} disabled={!youtubeURL.trim()} />
    </div>
  );
}
