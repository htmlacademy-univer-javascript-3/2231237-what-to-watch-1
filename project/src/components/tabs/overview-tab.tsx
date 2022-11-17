import {Film} from '../../types/film';

export type Props = {
  film: Film
}


function OverviewTab(props: Props) {
  const {film} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoreCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director">
          <strong>Director: {film.director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')} and
            other
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
