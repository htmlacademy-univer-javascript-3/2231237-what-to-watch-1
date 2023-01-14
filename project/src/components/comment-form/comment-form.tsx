import {FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchAddReviewAction} from "../../store/api-actions";
import {getFilm} from "../../store/film/action";

function CommentForm() {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const [rating, setRating] = useState({ratingStars: 8, reviewText: ''});

  const handleReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchAddReviewAction({comment: rating.reviewText, filmId: film?.id, rating: rating.ratingStars}))
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10)].map((_, index) => (
              <>
                <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating" value={10 - index}
                       checked={rating.ratingStars === (10 - index)} onChange={() => {
                  setRating(
                    {...rating, ratingStars: (10 - index)});
                }}
                />
                <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                      onChange={(evt) => {
                        setRating({...rating, reviewText: evt.target.value});
                      }}>
            </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentForm;
