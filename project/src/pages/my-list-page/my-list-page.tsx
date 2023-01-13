import {useAppSelector} from "../../hooks";
import HeaderUserInfo from "../../components/header-user-info/header-user-info";
import FilmCard from "../../components/film-card/film-card";


function MyListPage() {
  const {favoriteFilms} = useAppSelector((state) => state);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <HeaderUserInfo/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {/*<FilmsList films={films}/>*/}
      </section>

      <footer className="page-footer">
        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <article className="small-film-card catalog__films-card" key={film.id}>
              <FilmCard film={film}/>
            </article>
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
