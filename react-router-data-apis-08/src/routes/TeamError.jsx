import { useRouteError } from "react-router-dom";

export default function TeamError() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3>Team Error</h3>
      <p>{error.message}</p>
    </div>
  );
}
