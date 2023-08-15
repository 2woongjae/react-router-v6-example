import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

export function Component() {
  const data = useLoaderData();

  return (
    <>
      <h2>Home</h2>
      <Suspense fallback={<p>Loading date...</p>}>
        <Await resolve={data.date} errorElement={<p>Error loading date</p>}>
          {(date) => <p>Date from loader: {date}</p>}
        </Await>
      </Suspense>
    </>
  );
}
