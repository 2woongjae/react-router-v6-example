import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Home, { loader as homeLoader } from "./routes/Home";
import TeamLayout from "./routes/TeamLayout";
import Team from "./routes/Team";

const teams = [
  { id: "1", name: "Red" },
  { id: "2", name: "Green" },
  { id: "3", name: "Blue" },
];

async function teamsLoader() {
  return {
    teams,
  };
}

const teamsAction = ({ request }) => {
  console.log(request.method);

  switch (request.method) {
    case "POST": {
      const team = {
        id: `${teams.length + 1}`,
        name: `Team ${teams.length + 1}`,
      };

      teams.push(team);

      return team;
    }
    default: {
      throw new Response("", { status: 405 });
    }
  }
};

async function teamLoader({ params }) {
  const team = teams.find((team) => team.id === params.id);

  return {
    team,
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "about", element: <>About</> },
      { path: "dashboard", element: <>Dashboard</> },
      {
        path: "team",
        element: <TeamLayout />,
        loader: teamsLoader,
        action: teamsAction,
        children: [
          { index: true, element: <>Team Index</> },
          {
            path: ":id",
            element: <Team />,
            loader: teamLoader,
          },
        ],
      },
      { path: "*", element: <>Not Found</> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
