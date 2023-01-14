import {Link} from "react-router-dom";
import CommentForm from '../../components/comment-form/comment-form';
import {useAppSelector} from "../../hooks";
import NotFoundErrorPage from "../not-found-error-page/not-found-error-page";
import HeaderUserInfo from "../../components/header-user-info/header-user-info";
import {getFilm} from "../../store/film/action";



function AddReviewPage() {
  const film = useAppSelector(getFilm);

  if (!film) {
    return <NotFoundErrorPage/>
  }
  else {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={`${film.name} poster`}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}`}  className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <HeaderUserInfo/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218"
                 height="327"
            />
          </div>
        </div>

        <CommentForm/>
      </section>
    );
  }
}

export default AddReviewPage;
