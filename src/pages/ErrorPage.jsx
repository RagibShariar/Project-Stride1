import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();

  return (
    <div className="h-screen text-center bg-slate-200 flex flex-col justify-center items-center">
      <h1 className="text-7xl font-extrabold mb-8">
        {/* {status} {statusText} */}
      </h1>
      {/* <h2>{error.message}</h2> */}
      <Link className="my-4 btn btn-primary">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
