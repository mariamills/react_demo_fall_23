import { useRouteError } from 'react-router-dom';

function ErrorNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container text-center my-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}

export default ErrorNotFound;
