export enum AppRoutes {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player= '/player/:id',
  Main = '/',
  Unknown = '*'
}

export enum AuthorizationStatuses {
  Auth = 'auth',
  NoAuth = 'no_auth'
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

export const SHOWN_FILMS_STEP = 8;
