import ReactPlayer from "react-player/youtube";

type YouTubePlayerProps = {
  url: string;
};

export default function YouTubePlayer({ url }: YouTubePlayerProps) {
  return <ReactPlayer playing={true} muted={true} url={url} />;
}
