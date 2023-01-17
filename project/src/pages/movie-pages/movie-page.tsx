import {useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {apiRoutes, AppRoutes, AuthorizationStatus, SIMILAR_FILMS_COUNT} from '../../const';
import Tabs from '../../components/tabs/tabs';
import NotFoundErrorPage from '../not-found-error-page/not-found-error-page';
import {useAppDispatch, useAppSelector} from '../../hooks';
import HeaderUserInfo from '../../components/header-user-info/header-user-info';
import FilmCard from '../../components/film-card/film-card';
import {fetchFilmAction, fetchGetSimilarAction} from '../../store/api-actions';
import {getFilm, getLoadedDataStatusFilm, getSimilarFilms} from '../../store/film/action';
import {getAuthorizationStatus} from '../../store/user/action';
import Loader from '../../components/loader/loader';
import MovieInList from './movie-in-list';


function MoviePage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isLoadedFilm = useAppSelector(getLoadedDataStatusFilm);
  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
    dispatch(fetchGetSimilarAction(params.id));
  }, [dispatch, params.id]);

  if (isLoadedFilm) {
    return <Loader/>;
  }
  if (!film) {
    return <NotFoundErrorPage/>;
  }


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoutes.Main} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <HeaderUserInfo/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${apiRoutes.PLAYER}/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MovieInList film={film}/>
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`${apiRoutes.FILMS}/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218"
                height="327"
              />
            </div>

            <Tabs/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {
            similarFilms.slice(0, SIMILAR_FILMS_COUNT).map((similarFilm) =>
              (<FilmCard key={similarFilm.id} film={similarFilm} onClick={() => {
                navigate(`${apiRoutes.FILMS}/${similarFilm.id}`);
              }}
              />
              )
            )
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoutes.Main} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
