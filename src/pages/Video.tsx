import { useLocation, useNavigate } from "react-router";

import Button from "../components/Button";
import YouTubePlayer from "../components/YouTubePlayer";

export default function Video() {
  const navigate = useNavigate();
  const location = useLocation();
  const { youtubeURL } = location.state || {};

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <YouTubePlayer url={youtubeURL} />
      <Button name="Edit" onClick={handleGoBack} />
    </div>
  );
}
