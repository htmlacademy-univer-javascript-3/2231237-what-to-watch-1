import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {fetchReviewAction} from "../../store/api-actions";
import {getFilm} from "../../store/film/action";
import NotFoundErrorPage from "../../pages/not-found-error-page/not-found-error-page";
import {getReviews} from "../../store/review/action";

function ReviewsTab() {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();

  if (!film)
    return <NotFoundErrorPage/>

  useEffect(() => {dispatch(fetchReviewAction(film.id))}, [film.id])

  const review = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          review.map((reviews) =>
            <div className="review" key={reviews.id}>
              <blockquote className="review__quote">
                <p className="review__text">{reviews.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{reviews.user.name}</cite>
                  <time className="review__date" dateTime={reviews.date}>{reviews.date}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{reviews.rating}</div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ReviewsTab;
