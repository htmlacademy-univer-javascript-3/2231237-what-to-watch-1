import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoutes, AuthorizationStatuses} from '../../const';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-routes/private-routes';
import MoviePage from '../../pages/movie-pages/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import {Film} from '../../types/film';


type Props = {
  promoFilm: Film,
  films: Film[]
}

function App(props: Props): JSX.Element {
  const {promoFilm, films} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage films={films} promoFilm={promoFilm}/>}/>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoutes.MyList}
               element={<PrivateRoute authorizationStatus={AuthorizationStatuses.NoAuth}
                                      children={<MyListPage films={films}/>}/>}
        />
        <Route path={AppRoutes.Film}>
          <Route index element={<MoviePage film={films[0]}/>}/>
          <Route path={'review'}
                 element={<AddReviewPage film={films[0]}/>}/>
        </Route>
        <Route path={AppRoutes.Player} element={<PlayerPage film={films[0]}/>}/>
        <Route path={AppRoutes.Unknown} element={<NotFoundErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
