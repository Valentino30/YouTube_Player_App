import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import YouTubePlayer from "../components/YouTubePlayer";

export default function Video() {
  const navigate = useNavigate();
  const [youtubeURL, setYoutubeURL] = useState("");
  const [playbackTime, setPlaybackTime] = useState(0);

  useEffect(() => {
    const savedYoutubeURL = localStorage.getItem("youtubeURL");
    const savedPlaybackTime = localStorage.getItem("playbackTime");
    if (savedYoutubeURL && savedPlaybackTime) {
      setYoutubeURL(savedYoutubeURL);
      setPlaybackTime(Number(savedPlaybackTime));
    }
  }, []);

  const handlePlaybackTimeUpdate = (playbackTime: number) => {
    localStorage.setItem("playbackTime", JSON.stringify(playbackTime));
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <YouTubePlayer url={youtubeURL} playbackTime={playbackTime} onPlaybackTimeUpdate={handlePlaybackTimeUpdate} />
      <Button name="Edit" onClick={handleGoBack} />
    </div>
  );
}
