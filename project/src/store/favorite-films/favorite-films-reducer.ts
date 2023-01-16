import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchFavoriteFilmsAction} from '../api-actions';
import {FavoriteFilmsProcess} from '../../types/state';

const initialState: FavoriteFilmsProcess = {
  favoriteFilms: [],
  isDataLoaded: false
};

export const favoriteFilmProcess = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isDataLoaded = false;
      });
  }
});
