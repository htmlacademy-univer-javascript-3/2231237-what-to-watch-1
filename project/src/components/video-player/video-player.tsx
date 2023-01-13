import {useEffect, useRef, useState} from "react";

type VideoPlayerProps = {
  poster: string,
  previewVideoLink: string
}

function VideoPlayer({poster, previewVideoLink}: VideoPlayerProps) {
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (!isPlaying) {
      videoRef.current.load();
    } else {
      const timer = setTimeout(() => videoRef.current?.play(), 1000);
      return () => clearTimeout(timer);
    }

  }, [isPlaying]);
  return (
    <video muted autoPlay poster={poster} width={280} height={175} ref={videoRef} src={previewVideoLink}
           onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
    </video>
  );
}

export default VideoPlayer;
