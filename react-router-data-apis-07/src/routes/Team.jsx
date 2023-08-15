import { useLoaderData, /* useFetcher, */ Form } from "react-router-dom";

export default function Team() {
  const data = useLoaderData();
  // const fetcher = useFetcher();

  return (
    <div>
      <h2>Team {data.team.name}</h2>
      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
      {/* <fetcher.Form method="delete" action="/team">
        <input type="hidden" name="id" value={data.team.id} />
        <button type="submit">Delete</button>
      </fetcher.Form> */}
    </div>
  );
}
