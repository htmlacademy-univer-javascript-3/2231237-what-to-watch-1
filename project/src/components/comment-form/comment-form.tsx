import {FormEvent, useState, Fragment} from 'react';
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import {fetchAddReviewAction} from '../../store/api-actions';
import {getFilm} from '../../store/film/action';
import {
  INITIAL_FILM_RATING_STARS,
  MAX_REVIEW_TEXT_LENGTH,
  MAX_STARS_COUNT,
  MIN_REVIEW_TEXT_LENGTH} from '../../const';
import {getError} from '../../store/review/action';

function CommentForm() {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const error = useAppSelector(getError);
  const [canPost, setCanPost] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [rating, setRating] = useState({ratingStars: INITIAL_FILM_RATING_STARS, reviewText: ''});

  const handleReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    setIsSend(error !== undefined);
    evt.preventDefault();
    dispatch(fetchAddReviewAction({comment: rating.reviewText, filmId: film?.id, rating: rating.ratingStars}));
  };

  return (
    <div className="add-review">
      <p>{error}</p>
      <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10).keys()].map(( index) => (
              <Fragment key={index}>
                <input className="rating__input" id={`star-${MAX_STARS_COUNT - index}`} type="radio" disabled={isSend} name="rating" value={MAX_STARS_COUNT - index}
                  checked={rating.ratingStars === (MAX_STARS_COUNT - index)} onChange={() => {
                    setRating(
                      {...rating, ratingStars: (MAX_STARS_COUNT - index)});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${MAX_STARS_COUNT - index}`}>Rating {MAX_STARS_COUNT - index}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" disabled={isSend} id="review-text" placeholder="Review text"
            onChange={(evt) => {
              setRating({...rating, reviewText: evt.target.value});
              if (rating.reviewText.length >= MIN_REVIEW_TEXT_LENGTH && rating.reviewText.length <= MAX_REVIEW_TEXT_LENGTH) {
                setCanPost(true);
              } else {
                setCanPost(false);
              }
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!canPost || isSend}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentForm;
