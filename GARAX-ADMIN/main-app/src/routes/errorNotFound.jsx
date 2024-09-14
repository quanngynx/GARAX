// import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" translate-y-1/2">
      <h1 className="text-center">Oops!</h1>
      <p className="text-center"> Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage