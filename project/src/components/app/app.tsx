import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoutes} from '../../const';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-routes/private-routes';
import MoviePage from '../../pages/movie-pages/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundErrorPage from '../../pages/not-found-error-page/not-found-error-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import Loader from "../loader/loader";


type Props = {
  reviews: Review[]
}

function App(props: Props): JSX.Element {
  const {reviews} = props;
  const {isDataLoaded, films, authStatus} = useAppSelector((state) => state);
  const promoFilm = films[0];

  if (!isDataLoaded) {
    return <Loader/>
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage promoFilm={promoFilm}/>}/>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoutes.MyList}
               element={<PrivateRoute children={<MyListPage films={films}/>}/>}
        />
        <Route path={AppRoutes.Film}>
          <Route index element={<MoviePage films={films} reviews={reviews}/>}/>
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
