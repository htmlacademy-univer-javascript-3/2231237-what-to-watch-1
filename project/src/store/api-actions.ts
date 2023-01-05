import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {apiRoutes, AppRoutes, AuthorizationStatus} from '../const';
import {changeAuthStatus, changeDataLoadedStatus, getFilmsByGenre, redirectToRoute, setUserInfo} from './action';
import {User} from '../types/user';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from "../services/token";

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

export const fetchAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<User>(apiRoutes.LOGIN, {email, password});
    saveToken(user.token);

    dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUserInfo(user));
    dispatch(redirectToRoute(AppRoutes.Main));
    console.log('redirect');
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(apiRoutes.LOGOUT);
    dropToken();

    dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
    dispatch(redirectToRoute(AppRoutes.Main));
  },
);
