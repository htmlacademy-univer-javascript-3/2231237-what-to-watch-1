import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeGenre, getFilms} from "../../store/action";

type Props = {
  genre: string
};


function GenresList(props: Props) {
  const {films} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const catalogGenresData = ['All genres', ...new Set(films.map((x) => x.genre))];
  return (
    <ul className="catalog__genres-list">
      {
        catalogGenresData.map((genre) =>
          (
            <li key={genre.length}
                className={`catalog__genres-item ${props.genre === genre ? 'catalog__genres-item--active' : ''}`}>
              <a onClick={() => {
                dispatch(changeGenre(genre));
                dispatch(getFilms());
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
