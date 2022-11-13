import {useEffect, useRef} from "react";
import {Film} from "../../types/film";

type Props = {
  film: Film,
  width: number,
  height: number,
  isMuted: boolean,
  isPlaying: boolean,
}


function VideoPlayer(props: Props) {
  const {film, width, height, isMuted, isPlaying} = props;
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoPlayerRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video ref={videoPlayerRef}
           width={width}
           height={height}
           src={film.videoLink}
           poster={film.posterImage}
           muted={isMuted}/>
  );
}

export default VideoPlayer;
