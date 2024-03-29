import {FilmProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {
  fetchFilmAction, fetchGetSimilarAction,
  fetchPromoFilmAction
} from '../api-actions';
import {NameSpace} from '../../const';
import {Film} from '../../types/film';

const initialState: FilmProcess = {
  promoFilm: {} as Film,
  isDataLoaded: false,
  film: undefined,
  similarFilms: []
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchGetSimilarAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchGetSimilarAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      });
  }
});
