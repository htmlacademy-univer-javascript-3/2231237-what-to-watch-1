import {State} from '../../types/state';
import {Film} from '../../types/film';
import {NameSpace} from '../../const';

export const getFilms = (state: State): Film[] => state[NameSpace.Films].films;
export const getFilmsCount = (state: State): number => state[NameSpace.Films].filmsCount;
export const getLoadedDataStatusFilms = (state: State): boolean => state[NameSpace.Films].isDataLoaded;
export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const getFilmsWithGenre = (state: State): Film[] => state[NameSpace.Films].genresFilms;
