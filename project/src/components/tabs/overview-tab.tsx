import {Film} from '../../types/film';
import NotFoundErrorPage from "../../pages/not-found-error-page/not-found-error-page";

type Props = {
  film: Film | null
}

function OverviewTab(props: Props) {
  const {film} = props;

  if (!film){
    return <NotFoundErrorPage/>;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film?.scoreCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
        <p className="film-card__director">
          <strong>Director: {film?.director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {film?.starring.slice(0, 4).join(', ')} and
            other
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
