import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';


type Props = {
  film: Film,
}

export type FilmCardProps = Props & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

function FilmCard(props: FilmCardProps) {
  const {
    film, onMouseEnter, onMouseLeave, onClick
  } = props;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             onClick={onClick}>
      <VideoPlayer previewVideoLink={film.previewVideoLink} poster={film.posterImage}/>
      <h3 className="small-film-card__title">
        <Link to={`/film/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
