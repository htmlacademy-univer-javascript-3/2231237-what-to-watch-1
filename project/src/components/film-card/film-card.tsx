import {Link} from 'react-router-dom';

type Props = {
  id: string,
  name: string,
  poster: string,
  onMouseEnter: (id: string) => void,
}

function FilmCard(props: Props) {
  const {id, name, poster, onMouseEnter} = props;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseEnter(id)}>
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
