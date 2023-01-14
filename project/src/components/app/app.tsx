import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoutes, AuthorizationStatus} from '../../const';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-routes/private-routes';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import {useAppSelector} from '../../hooks';
import Loader from "../loader/loader";
import browserHistory from "../../browser-history";
import HistoryRouter from "../history-router/history-router";
import MoviePage from "../../pages/movie-pages/movie-page";
import {getLoadedDataStatusFilm} from "../../store/film/action";
import {getLoadedDataStatusFilms} from "../../store/films/action";
import {getAuthorizationStatus} from "../../store/user/action";

function App(): JSX.Element {
  // const {isDataLoaded, authStatus} = useAppSelector((state) => state);
  const isDataLoadedFilm = useAppSelector(getLoadedDataStatusFilm);
  const isDataLoadedFilms = useAppSelector(getLoadedDataStatusFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoadedFilms) {
    return (
      <Loader/>
    );
  }

  return (
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoutes.Film} element={<MoviePage/>}/>
        <Route path={AppRoutes.AddReview} element={<AddReviewPage/>}/>
        <Route path={AppRoutes.Player} element={<PlayerPage/>}/>
        <Route path={AppRoutes.Unknown} element={<NotFoundErrorPage/>}/>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute>
              <MyListPage/>
            </PrivateRoute>
          }
        />
      </Routes>
  );
}

export default App;
