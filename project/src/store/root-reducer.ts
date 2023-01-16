import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {filmProcess} from './film/film-reducer';
import {filmsProcess} from './films/films-reducer';
import {reviewProcess} from './review/review-reducer';
import {userProcess} from './user/user-reducer';
import {favoriteFilmProcess} from './favorite-films/favorite-films-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FavoriteFilms]: favoriteFilmProcess.reducer
});
