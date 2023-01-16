import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Film} from '../../types/film';

export const getLoadedDataStatusFilm = (state: State): boolean => state[NameSpace.Film].isDataLoaded;
export const getFilm = (state: State): Film | undefined => state[NameSpace.Film].film;
export const getPromoFilm = (state: State): Film => state[NameSpace.Film].promoFilm;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Film].similarFilms;
