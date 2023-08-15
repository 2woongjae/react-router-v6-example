import { useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get("message");

  const click = useCallback(() => {
    setSearchParams({
      message: "world",
    });
  }, [setSearchParams]);

  return (
    <div>
      <h3>Team: {teamId}</h3>
      <button onClick={click}>click</button>
      {message && <h4>message: {message}</h4>}
    </div>
  );
}
