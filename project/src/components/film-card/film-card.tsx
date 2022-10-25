import {Link} from 'react-router-dom';
import {Film} from "../../types/film";

type Props = {
  film: Film,
  onMouseEnter: (id: string) => void,
}

function FilmCard(props: Props) {
  const {film, onMouseEnter} = props;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseEnter(film.id)}>
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
