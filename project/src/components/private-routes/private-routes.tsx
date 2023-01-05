import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {useAppSelector} from "../../hooks";


type Props = {
  children: JSX.Element;
}

function PrivateRoute(props: Props) {
  const {children} = props;
  const {authStatus} = useAppSelector((state) => state);

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
