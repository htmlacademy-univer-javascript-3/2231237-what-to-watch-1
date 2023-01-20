import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {apiRoutes} from '../const';
import {redirectToRoute} from './action';
import {User} from '../types/user';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import {Review} from '../types/review';

export const fetchAllFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(apiRoutes.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film | undefined, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(`${apiRoutes.Films}/${filmId}`);
      return data;
    } catch {
      dispatch(redirectToRoute(apiRoutes.NotFound));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(apiRoutes.Promo);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(apiRoutes.Favorite);
    return data;
  },
);

export const fetchChangeFavoriteFilmsAction = createAsyncThunk<Film, {filmId: number | undefined; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchChangeFavoriteFilms',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`${apiRoutes.Favorite}/${filmId}/${status}`);
    return data;
  },
);

export const fetchReviewAction = createAsyncThunk<Review[], number | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReview',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${apiRoutes.Comments}/${filmId}`);
    return data;
  },
);

export const fetchAddReviewAction = createAsyncThunk<Review[] | Error, {filmId: number | undefined; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAddReview',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[] | Error>(`${apiRoutes.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${apiRoutes.Films}/${filmId}`));
    return data;
  },
);

export const fetchGetSimilarAction = createAsyncThunk<Film[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetSimilar',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${apiRoutes.Films}/${filmId}${apiRoutes.Similar}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User>(apiRoutes.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<User>(apiRoutes.Login, {email, password});
    saveToken(user.token);
    dispatch(redirectToRoute(apiRoutes.Default));
    return user;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(apiRoutes.Logout);
    dropToken();
  },
);

