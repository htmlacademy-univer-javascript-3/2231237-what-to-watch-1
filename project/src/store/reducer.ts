import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {
  changeGenre,
  getFavoriteFilms,
  getFilm,
  getFilms,
  getPromo,
  getReview,
  getSimilar,
  getUser,
  loadFilms,
  requireAuthorization,
  resetFilmsCount,
  setDataLoadedStatus,
  setError,
  showMore
} from './action';
import {Film} from '../types/film';
import {User} from "../types/user";
import {Review} from "../types/review";

const INITIAL_STATE_GENRE = 'All genres';
const INITIAL_STATE_FILM_COUNT = 8;

type AppState = {
  genre: string,
  films: Film[],
  filmsCount: number,
  promoFilm: Film | null,
  favoriteFilms: Film[],
  review: Review[],
  genresFilm: Film[],
  isDataLoaded: boolean,
  authStatus: AuthorizationStatus,
  error: string | null,
  user: User | null,
  film: Film | null,
  similarFilms: Film[]
}

const initialState: AppState = {
  genre: INITIAL_STATE_GENRE,
  films: [],
  filmsCount: INITIAL_STATE_FILM_COUNT,
  promoFilm: null,
  favoriteFilms: [],
  review: [],
  genresFilm: [],
  isDataLoaded: false,
  authStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
  film: null,
  similarFilms: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
  builder
    .addCase(getFilms, (state) => {
      state.genresFilm = state.genre === INITIAL_STATE_GENRE ? state.films : state.films.filter((film) => film.genre === state.genre);
    });
  builder
    .addCase(showMore, (state) => {
      state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
    });
  builder
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = INITIAL_STATE_FILM_COUNT;
    });
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload
      state.genresFilm = action.payload
    })
  builder
    .addCase(getPromo, (state, action) => {
      state.promoFilm = action.payload
    })
  builder
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload
    })
  builder
    .addCase(getReview, (state, action) => {
      state.review = action.payload
    })
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    });
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
  builder
    .addCase(getUser, (state, action) => {
      state.user = action.payload;
    });
  builder
    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    });
  builder
    .addCase(getSimilar, (state, action) => {
      state.similarFilms = action.payload;
    });
});

export {reducer};
