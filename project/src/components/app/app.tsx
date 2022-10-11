import MainPage, {MainPageProps} from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../const';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-routes/private-routes';
import MoviePage from '../../pages/movie-pages/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import MyListPage from '../../pages/my-list-page/my-list-page';


function App(props: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage name={props.name} genre={props.genre} year={props.year}/>}/>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoutes.MyList}
               element={<PrivateRoute authorizationStatus={AuthorizationStatuses.NoAuth} JSXChild={<MyListPage/>}/>}
        />
        <Route path={AppRoutes.Film} element={<MoviePage/>}/>
        <Route path={AppRoutes.AddReview} element={<AddReviewPage/>}/>
        <Route path={AppRoutes.Player} element={<PlayerPage/>}/>
        <Route path={AppRoutes.Unknown} element={<NotFoundErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
