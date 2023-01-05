import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Genres} from '../const';
import {changeAuthStatus, changeDataLoadedStatus, changeGenre, getFilmsByGenre, setUserInfo} from './action';
import {Film} from '../types/film';
import {User} from "../types/user";

type AppState = {
  films: Film[],
  activeGenre: string,
  isDataLoaded: boolean,
  authStatus: AuthorizationStatus,
  user: User | null;
}

const initialState: AppState = {
  films: [],
  activeGenre: Genres.ALL_GENRES,
  isDataLoaded: false,
  authStatus: AuthorizationStatus.NoAuth,
  user: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    })
    .addCase(changeDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    });
});

