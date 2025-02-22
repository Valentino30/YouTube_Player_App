import ReactPlayer from "react-player/youtube";

export default function YouTubePlayer() {
  return <ReactPlayer playing={true} muted={true} url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />;
}
