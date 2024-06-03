import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ups, I did it again</h1>
      <p>{error.statusText || error.message}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
