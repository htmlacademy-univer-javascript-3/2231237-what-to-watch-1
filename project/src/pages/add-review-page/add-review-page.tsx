import {Link} from "react-router-dom";
import CommentForm from '../../components/comment-form/comment-form';
import {useAppSelector} from "../../hooks";
import NotFoundErrorPage from "../not-found-error-page/not-found-error-page";
import HeaderUserInfo from "../../components/header-user-info/header-user-info";



function AddReviewPage() {

  const {promoFilm} = useAppSelector((state) => state);

  if (!promoFilm) {
    return <NotFoundErrorPage/>
  }
  else {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={promoFilm?.backgroundImage} alt={`${promoFilm?.name} poster`}/>
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
                  <Link to={`/films/${promoFilm?.id}`}  className="breadcrumbs__link">{promoFilm?.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <HeaderUserInfo/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={promoFilm?.posterImage} alt={`${promoFilm?.name} poster`} width="218"
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
