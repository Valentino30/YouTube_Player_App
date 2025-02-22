import { useLocation } from "react-router";
import YouTubePlayer from "../components/YouTubePlayer";

export default function Video() {
  const location = useLocation();
  const { youtubeURL } = location.state || {};
  console.log({ youtubeURL });

  return (
    <div>
      <YouTubePlayer url={youtubeURL} />
    </div>
  );
}
