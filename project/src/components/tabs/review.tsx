import {Review} from '../../types/review';

type Props = {
  review: Review;
}

function MovieReviewColumn(props: Props): JSX.Element {
  const dateFormat = (review: Review) =>
    new Date(review.date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{props.review.user.name}</cite>
          <time className="review__date" dateTime={props.review.date}>{dateFormat(props.review)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.review.rating.toFixed(1)}</div>
    </div>
  );
}

export default MovieReviewColumn;
