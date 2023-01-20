import {Link} from 'react-router-dom';
import {apiRoutes} from '../../const';

function NotFoundErrorPage() {
  return (
    <>
      <h3>
        Page not found (404)
      </h3>
      <Link to={apiRoutes.Default}>
        Return to main page
      </Link>
    </>
  );
}

export default NotFoundErrorPage;
