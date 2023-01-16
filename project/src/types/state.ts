import {Film} from './film';
import {store} from '../store';
import {Review} from "./review";
import {AuthorizationStatus} from "../const";
import {User} from "./user";

export type FilmProcess = {
  promoFilm: Film;
  isDataLoaded: boolean;
  film: Film | undefined;
  similarFilms: Film[];
};

export type FavoriteFilmsProcess = {
  favoriteFilms: Film[];
  isDataLoaded: boolean;
};

export type FilmsProcess = {
  filmsCount : number;
  genre : string;
  genresFilms : Film[];
  films: Film[];
  isDataLoaded: boolean;
};

export type ReviewProcess = {
  review: Review[];
  isDataLoaded: boolean;
  error: string | undefined;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | undefined;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
