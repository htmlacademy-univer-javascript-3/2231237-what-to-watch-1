import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {apiRoutes} from '../../const';

type Props = {
  film: Film;
}

export type FilmCardProps = Props & {
  onClick?: () => void;
}

function FilmCard(props: FilmCardProps) {
  const {film, onClick} = props;

  return (
    <article className="small-film-card catalog__films-card" onClick={onClick}>
      <VideoPlayer previewVideoLink={film.previewVideoLink} poster={film.posterImage}/>
      <h3 className="small-film-card__title">
        <Link to={`${apiRoutes.Films}/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
