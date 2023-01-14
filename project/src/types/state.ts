import {Film} from './film';
import {store} from '../store';
import {Review} from "./review";
import {AuthorizationStatus} from "../const";
import {User} from "./user";

export type FilmProcess = {
  promoFilm: Film | undefined,
  isDataLoaded: boolean,
  film: Film | undefined,
  similarFilms: Film[]
}

export type FilmsProcess = {
  filmsCount : number,
  genre : string,
  genresFilms : Film[],
  films: Film[],
  favoriteFilms: Film[],
  isDataLoaded: boolean
};

export type ReviewProcess = {
  review: Review[],
  isDataLoaded: boolean,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | undefined,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
