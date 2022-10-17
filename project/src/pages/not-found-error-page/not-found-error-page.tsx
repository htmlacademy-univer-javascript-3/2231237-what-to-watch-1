import {Link} from 'react-router-dom';

function NotFoundErrorPage() {
  return (
    <>
      <h3>
        Page not found (404)
      </h3>
      <Link to={'/'}>
        Return to main page
      </Link>
    </>
  );
}

export default NotFoundErrorPage;
