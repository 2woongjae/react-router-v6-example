import { useLoaderData } from "react-router-dom";

export default function Team() {
  const data = useLoaderData();

  return (
    <div>
      <h2>TeamLayout</h2>
      {data.team.name}
    </div>
  );
}
