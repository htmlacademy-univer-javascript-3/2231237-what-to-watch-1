import {useEffect} from 'react';
import {
  Link,
  useNavigate
} from 'react-router-dom';
import {
  apiRoutes,
  AppRoutes
} from '../../const';
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import {
  resetCount,
  showMore
} from '../../store/action';
import {
  getFilmsCount,
  getFilmsWithGenre,
  getGenre
} from '../../store/films/action';
import {getPromoFilm} from '../../store/film/action';
import HeaderUserInfo from '../../components/header-user-info/header-user-info';
import FilmCard from '../../components/film-card/film-card';
import GenresList from '../../components/genre-list/genre-list';
import {fetchPromoFilmAction} from '../../store/api-actions';
import MovieInList from '../movie-pages/movie-in-list';


function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetCount());
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const promoFilm = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGenre);
  const filmsCount = useAppSelector(getFilmsCount);
  const genresFilm = useAppSelector(getFilmsWithGenre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.posterImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a href={AppRoutes.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <HeaderUserInfo/>

        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.posterImage} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">

                <Link to={`${apiRoutes.PLAYER}/${promoFilm.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <MovieInList film={promoFilm}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genre={genre}/>
          <div className="catalog__films-list">
            {genresFilm.slice(0, filmsCount).map((film) => (
              <FilmCard key={film.id} film={film} onClick={() => {
                navigate(`${apiRoutes.FILMS}/${film.id}`);
              }}
              />))}
          </div>
          <div className="catalog__more">
            {filmsCount <= genresFilm.length &&
              <button className="catalog__button" type="button" onClick={() => dispatch(showMore())}>Show more</button>}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href={'/'} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
