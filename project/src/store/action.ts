import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const getFilmsByGenre = createAction<{films: Film[]}>('getFilmsByGenre');

