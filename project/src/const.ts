export enum AppRoutes {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player= '/player/:id',
  Main = '/',
  Unknown = '*',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'no_auth',
  Unknown = 'unknown'
}

export enum TabTypes {
  Overview = 'overview',
  Details = 'details',
  Review = 'review'
}

export enum apiRoutes {
  Default = '/',
  Films = '/films',
  Film = '/film',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  NotFound = '/notFound',
  // Review = '/review',
  Player = '/player',
  // MyList = '/mylist'
}

export enum NameSpace {
  Films = 'FILMS',
  Film = 'FILM',
  Review = 'REVIEW',
  User = 'USER',
  FavoriteFilms = 'FAVORITE',
}

export const SHOWN_FILMS_STEP = 8;
export const INITIAL_GENRE_STATE = 'All genres';
export const INITIAL_FILM_RATING_STARS = 8;
export const MIN_REVIEW_TEXT_LENGTH = 50;
export const MAX_REVIEW_TEXT_LENGTH = 400;
export const MAX_STARS_COUNT = 10;
export const SIMILAR_FILMS_COUNT = 4;
