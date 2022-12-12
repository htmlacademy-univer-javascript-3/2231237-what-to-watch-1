import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {Genres} from '../const';
import {changeGenre, getFilmsByGenre} from './action';
import {AppState} from '../types/store';


const initialState: AppState = {
  films: films,
  activeGenre: Genres.ALL_GENRES,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmsByGenre, (state, action) => {
      const {films} = action.payload;
      state.films = films;
    })
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    });
});

