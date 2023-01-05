import {useState} from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';


type Props = {
  films: Film[];
}

function FilmsList(props: Props) {
  const {films} = props;
  const [, setActiveFilm] = useState<number | null>(null);
  const handleMouseEnter = (id: number | null) => setActiveFilm(id);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id}
                                     onMouseEnter={handleMouseEnter}/>)}
    </div>
  );
}

export default FilmsList;
