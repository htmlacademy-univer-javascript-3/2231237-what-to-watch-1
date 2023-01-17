import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Film} from '../../types/film';

export const getLoadedDataStatusFavoriteFilm = (state: State): boolean => state[NameSpace.FavoriteFilms].isDataLoaded;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.FavoriteFilms].favoriteFilms;
