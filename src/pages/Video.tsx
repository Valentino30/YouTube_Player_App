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
    <div className="flex flex-col items-center justify-center p-4 h-screen gap-4">
      {youtubeURL ? (
        <YouTubePlayer url={youtubeURL} playbackTime={playbackTime} onPlaybackTimeUpdate={handlePlaybackTimeUpdate} />
      ) : (
        <div className="flex items-center justify-center h-[360px] w-full">
          <h2>Save a YouTube URL in the homepage to see the video appear here 😊</h2>
        </div>
      )}
      <Button name="Edit URL" onClick={handleGoBack} />
    </div>
  );
}
