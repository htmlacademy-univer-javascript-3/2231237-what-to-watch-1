import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms} from '../../store/favorite-films/action';
import {fetchChangeFavoriteFilmsAction, fetchFavoriteFilmsAction} from '../../store/api-actions';
import {Film} from '../../types/film';
import {getAuthorizationStatus} from '../../store/user/action';
import {AuthorizationStatus} from '../../const';

type Props = {
  film: Film;
}

function MovieInList(props: Props): JSX.Element {
  const filmStatus = props.film.isFavourite;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch, filmStatus]);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() =>
      dispatch(fetchChangeFavoriteFilmsAction({
        filmId: props.film.id,
        status: Number(!filmStatus)
      }))}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          authorizationStatus === AuthorizationStatus.Auth && filmStatus
            ? <use xlinkHref="#in-list"/>
            : <use xlinkHref="#add"/>
        }
      </svg>
      <span>My list</span>
      {authorizationStatus === AuthorizationStatus.Auth && <span className="film-card__count">{favoriteFilms.length}</span>}
    </button>
  );
}

export default MovieInList;
