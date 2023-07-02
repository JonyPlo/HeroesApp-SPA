import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate()
  console.error(error);

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <button className='btn btn-primary' onClick={onNavigateBack}>Back</button>
    </div>
  );
}
