import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeGenre} from "../../store/action";
import {getFilms} from "../../store/films/action";
import {INITIAL_GENRE_STATE} from "../../const";

type Props = {
  genre: string
};


function GenresList(props: Props) {
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();
  const catalogGenresData = [INITIAL_GENRE_STATE, ...new Set(films.map((x) => x.genre))];
  return (
    <ul className="catalog__genres-list">
      {
        catalogGenresData.map((genre) =>
          (
            <li key={genre.length}
                className={`catalog__genres-item ${props.genre === genre ? 'catalog__genres-item--active' : ''}`}>
              <a onClick={() => {
                dispatch(changeGenre(genre));
              }} className="catalog__genres-link"
              >{genre}
              </a>
            </li>
          )
        )
      }
    </ul>
  );
}

export default GenresList;
