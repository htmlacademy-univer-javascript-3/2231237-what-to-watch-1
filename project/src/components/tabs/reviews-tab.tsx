import {useEffect} from 'react';
import {
  useAppDispatch,
  useAppSelector} from '../../hooks';
import {fetchReviewAction} from '../../store/api-actions';
import {getFilm} from '../../store/film/action';
import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import {
  getLoadedDataStatusReview,
  getReviews} from '../../store/review/action';
import Loader from '../loader/loader';
import MovieReviewColumn from './review';

function ReviewsTab() {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadedDataStatusReview);

  useEffect(() => {dispatch(fetchReviewAction(film?.id));}, [dispatch, film?.id]);
  const reviews = useAppSelector(getReviews);
  if (isLoading)
  {return <Loader/>;}
  if (!film)
  {return <NotFoundErrorPage/>;}

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) =>
          <MovieReviewColumn review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2 + 1, reviews.length).map((review) =>
          <MovieReviewColumn review={review} key={review.id}/>)}
      </div>
    </div>
  );
}

export default ReviewsTab;
