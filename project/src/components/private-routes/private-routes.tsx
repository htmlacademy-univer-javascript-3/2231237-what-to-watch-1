import {Navigate} from 'react-router-dom';
import {
  AppRoutes,
  AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user/action';


type Props = {
  children: JSX.Element;
}

function PrivateRoute(props: Props) {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
