import {useState} from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';


type Props = {
  films: Film[]
}

function FilmsList(props: Props) {
  const {films} = props;
  const [, setActiveFilm] = useState('');
  const activeFilmHandler = (id: string) => setActiveFilm(id);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard id={film.id} name={film.name} poster={film.poster}
                                     onMouseEnter={activeFilmHandler}/>)}
    </div>
  );
}

export default FilmsList;
