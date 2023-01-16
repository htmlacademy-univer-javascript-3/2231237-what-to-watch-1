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
  OVERVIEW = 'overview',
  DETAILS = 'details',
  REVIEW = 'review'
}

export enum Genres {
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  THRILLER = 'Thriller',
  ALL_GENRES = 'All genres',
}

export enum apiRoutes {
  DEFAULT = '/',
  FILMS = '/films',
  FILM = '/film',
  LOGIN = '/login',
  LOGOUT = '/logout',
  SIMILAR = '/similar',
  PROMO = '/promo',
  FAVORITE = '/favorite',
  COMMENTS = '/comments',
  NOT_FOUND = '/notFound',
  // Review = '/review',
  PLAYER = '/player',
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
