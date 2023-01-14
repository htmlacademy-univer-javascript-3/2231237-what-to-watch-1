import {FilmsProcess} from "../../types/state";
import {INITIAL_GENRE_STATE, NameSpace, SHOWN_FILMS_STEP} from "../../const";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAllFilmsAction, fetchFavoriteFilmsAction} from "../api-actions";
import {changeGenre, resetCount, showMore} from "../action";

const initialState: FilmsProcess = {
  filmsCount: SHOWN_FILMS_STEP,
  genre: INITIAL_GENRE_STATE,
  films: [],
  genresFilms: [],
  favoriteFilms: [],
  isDataLoaded: false
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchAllFilmsAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchAllFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload
        state.genresFilms = state.films
        state.isDataLoaded = false
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload
        state.isDataLoaded = false
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload
        state.genresFilms = state.genre === INITIAL_GENRE_STATE ? state.films : state.films.filter((film) => film.genre === state.genre);
      })
      .addCase(showMore, (state) => {
        state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
      })
      .addCase(resetCount, (state) => {
        state.filmsCount = SHOWN_FILMS_STEP;
      })
  }
});
