import {AppRoutes, AuthorizationStatuses} from '../../const';
import {Navigate} from 'react-router-dom';

type Props = {
  authorizationStatus: AuthorizationStatuses;
  JSXChild: JSX.Element;
}

function PrivateRoute(props: Props) {
  const {authorizationStatus, JSXChild} = props;
  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? JSXChild
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
