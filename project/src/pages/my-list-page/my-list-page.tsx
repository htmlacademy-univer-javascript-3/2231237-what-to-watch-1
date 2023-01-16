import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import HeaderUserInfo from '../../components/header-user-info/header-user-info';
import FilmCard from '../../components/film-card/film-card';
import {getFavoriteFilms, getLoadedDataStatusFavoriteFilm} from '../../store/favorite-films/action';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import {apiRoutes} from '../../const';


function MyListPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(getLoadedDataStatusFavoriteFilm);
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  if (isLoaded) {
    return <Loader/>;
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={apiRoutes.DEFAULT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <HeaderUserInfo/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
      </section>

      <footer className="page-footer">
        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <FilmCard key={film.id} film={film} onClick={() => {
              navigate(`${apiRoutes.FILMS}/${film.id}`);
            }}
            />
          ))}
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
