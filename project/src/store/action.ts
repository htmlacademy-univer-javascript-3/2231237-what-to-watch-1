import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppRoutes, AuthorizationStatus} from '../const';
import {User} from '../types/user';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const getFilmsByGenre = createAction<Film[]>('getFilmsByGenre');
export const changeDataLoadedStatus = createAction<boolean>('changeDataLoadedStatus');
export const changeAuthStatus = createAction<AuthorizationStatus>('changeAuthStatus');
export const setUserInfo = createAction<User|null>('setUserInfo');
export const redirectToRoute = createAction<AppRoutes>('redirectToRoute');

