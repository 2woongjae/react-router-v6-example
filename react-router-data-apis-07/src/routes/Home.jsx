import { useLoaderData } from "react-router-dom";

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    date: new Date().toISOString(),
  };
}

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {data.date}</p>
    </>
  );
}
