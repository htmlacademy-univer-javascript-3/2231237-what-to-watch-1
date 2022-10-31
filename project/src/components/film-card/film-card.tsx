import {Link} from 'react-router-dom';
import {Film} from "../../types/film";

type Props = {
  film: Film,
  onMouseEnter: (id: string) => void,
}

function FilmCard(props: Props) {
  const {
    film:
      {
        id,
        name,
        posterImage
      },
    onMouseEnter
  } = props;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseEnter(id)}>
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
