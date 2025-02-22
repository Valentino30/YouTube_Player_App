import ReactPlayer from "react-player/youtube";

type YouTubePlayerProps = {
  url: string;
  playbackTime?: number;
  onPlaybackTimeUpdate?: (time: number) => void;
};

export default function YouTubePlayer({ url, playbackTime = 0, onPlaybackTimeUpdate }: YouTubePlayerProps) {
  const playbackUrl = `${url}?start=${playbackTime}`;

  const handleProgress = (state: { playedSeconds: number }) => {
    if (onPlaybackTimeUpdate) {
      onPlaybackTimeUpdate(state.playedSeconds);
    }
  };

  return <ReactPlayer playing={true} muted={true} url={playbackUrl} onProgress={handleProgress} />;
}
