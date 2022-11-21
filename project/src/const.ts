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
