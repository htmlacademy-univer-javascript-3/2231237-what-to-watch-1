import {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {apiRoutes} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmAction} from '../../store/api-actions';
import {getFilm} from '../../store/film/action';
import Loader from '../../components/loader/loader';

function PlayerPage() {
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    dispatch(fetchFilmAction(params.id));

    if (videoRef.current === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

  }, [dispatch, params.id]);

  const handlePlayVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreenVideo = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  const handleProgressBar = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = (e.target as HTMLVideoElement);
    if (isNaN(target.duration)) {
      return;
    }
    setProgress((target.currentTime / target.duration) * 100);
    if (videoRef.current) {
      setTimeLeft(Math.trunc(videoRef.current.duration - videoRef.current.currentTime));
    }

  };

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    let format = date.toISOString().slice(11, 19).toString();
    if (format.startsWith('00')) {
      format = format.substring(3);
    }
    return `-${format}`;
  };


  return (
    <div className="player">
      <video src={film?.videoLink}
        className="player__video"
        poster={film?.backgroundImage}
        ref={videoRef}
        onDoubleClick={handleFullScreenVideo}
        onTimeUpdate={(event) => handleProgressBar(event)}
      />

      {isLoading && <Loader/>}
      <button type="button" className="player__exit" onClick={() =>
        navigate(`${apiRoutes.FILMS}/${film?.id}`)}
      >Exit
      </button>


      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{'left': `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayVideo}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              {!isPlaying ?
                <use xlinkHref="#play-s"/> :
                <use xlinkHref="#pause"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenVideo}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
