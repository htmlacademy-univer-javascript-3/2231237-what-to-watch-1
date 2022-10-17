import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../const';


type Props = {
  authorizationStatus: AuthorizationStatuses;
  children: JSX.Element;
}

function PrivateRoute(props: Props) {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
