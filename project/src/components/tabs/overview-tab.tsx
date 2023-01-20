import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import {useAppSelector} from '../../hooks';
import {getFilm} from '../../store/film/action';


function OverviewTab() {
  const film = useAppSelector(getFilm);

  if (!film){
    return <NotFoundErrorPage/>;
  }

  const rating = () => {
    if (film.rating >= 0 && film.rating < 3)
    {return 'Bad';}
    if (film.rating >= 3 && film.rating < 5)
    {return 'Normal';}
    if (film.rating >= 5 && film.rating < 8)
    {return 'Good';}
    if (film.rating >= 8 && film.rating < 10)
    {return 'Very good';}
    if (film.rating === 10)
    {return 'Awesome';}
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rating()}</span>
          <span className="film-rating__count">{`${film.scoresCount.toString()} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director">
          <strong>Director: {film.director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {film.starring.slice(0, 4).join(', ')} and
            other
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
