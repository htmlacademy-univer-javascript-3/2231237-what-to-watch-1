import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';
import {StatusCodes} from "http-status-codes";
import {store} from "../store";
import {setError} from "../store/action";
import {clearErrorAction} from "../store/api-actions";

const BASE_URL = 'https://10.react.pages.academy/wtw';
const TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];


export const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers!['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        // @ts-ignore
        processErrorHandle(error.response.data.error);
      }

      throw error;
    }
  );
  return api;
}