import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from "../types/store";
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {apiRoutes} from '../const';
import {changeDataLoadedStatus, getFilmsByGenre} from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeDataLoadedStatus(false));
    const {data} = await api.get<Film[]>(apiRoutes.FILMS);
    dispatch(getFilmsByGenre(data));
    dispatch(changeDataLoadedStatus(true));
  }
);
