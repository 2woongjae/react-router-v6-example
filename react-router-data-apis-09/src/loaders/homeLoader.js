import { defer } from "react-router-dom";

export default function loader() {
  const date = new Promise((resolve) =>
    setTimeout(() => resolve(new Date().toISOString()), 1000)
  );

  return defer({
    date,
  });
}
