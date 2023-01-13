import {Link} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';


function HeaderUserInfo() {
  const {authStatus, user} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  if (authStatus === AuthorizationStatus.NoAuth) {
    return (
      <div className="user-block">
        <Link className="user-block__link" to={AppRoutes.SignIn}>Sign in</Link>
      </div>
    );
  }

  return (
    <>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >Sign out</Link>
        </li>
      </ul>
    </>
  );
}

export default HeaderUserInfo;
