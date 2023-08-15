export default async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    date: new Date().toISOString(),
  };
}
