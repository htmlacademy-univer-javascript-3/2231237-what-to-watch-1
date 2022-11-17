import {Review} from '../../types/review';

export type Props = {
  reviews: Review[]
}

function ReviewsTab(props: Props) {
  const {reviews} = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) =>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{review.date}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ReviewsTab;
