import {createReducer} from '@reduxjs/toolkit';
import {Genres} from '../const';
import {changeDataLoadedStatus, changeGenre, getFilmsByGenre} from './action';
import {Film} from '../types/film';

type AppState = {
  films: Film[],
  activeGenre: string,
  isDataLoaded: boolean
}

const initialState: AppState = {
  films: [],
  activeGenre: Genres.ALL_GENRES,
  isDataLoaded: false
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
    });
});

