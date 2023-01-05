import {Link} from 'react-router-dom';
import {SyntheticEvent} from 'react';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';


function HeaderUserInfo() {
  const {authStatus, user} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleSignOut = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      {
        authStatus !== AuthorizationStatus.Auth
          ? <Link to={AppRoutes.SignIn} className="user-block__link">Sign in</Link>
          : (
            <>
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a href='/' className="user-block__link" onClick={handleSignOut}>Sign out</a>
              </li>
            </>
          )
      }
    </ul>
  );
}

export default HeaderUserInfo;
