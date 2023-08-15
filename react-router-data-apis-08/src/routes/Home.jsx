import { useLoaderData } from "react-router-dom";

export function Component() {
  const data = useLoaderData();

  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {data.date}</p>
    </>
  );
}
