import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoutes, SHOWN_FILMS_STEP} from '../../const';
import GenresList from "../../components/genre-list/genre-list";
import {useAppDispatch, useAppSelector} from '../../hooks';
// import ShowMore from "../../components/show-more/show-more";
import {useEffect, useState} from "react";
import HeaderUserInfo from "../../components/header-user-info/header-user-info";
import NotFoundErrorPage from "../not-found-error-page/not-found-error-page";
import FilmCard from "../../components/film-card/film-card";
import {resetCount, showMore} from "../../store/action";
import {getPromoFilm} from "../../store/film/action";
import {getFavoriteFilms, getFilmsCount, getFilmsWithGenre, getGenre} from "../../store/films/action";


function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetCount())
  }, [dispatch])

  const promoFilm = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGenre);
  const filmsCount = useAppSelector(getFilmsCount);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const genresFilm = useAppSelector(getFilmsWithGenre)

  if (promoFilm === undefined)
    return <NotFoundErrorPage/>

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
                   height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">

                <Link to={`/player/${promoFilm.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>

                <Link to={AppRoutes.MyList} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </Link>
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
                navigate(`/films/${film.id}`);
              }}
              />))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={() => dispatch(showMore())}>Show more</button>
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
