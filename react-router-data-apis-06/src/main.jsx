import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Layout from "./routes/Layout";
import Home, { loader as homeLoader } from "./routes/Home";
import TeamLayout from "./routes/TeamLayout";
import Team from "./routes/Team";

let teams = [
  { id: "1", name: "Red" },
  { id: "2", name: "Green" },
  { id: "3", name: "Blue" },
];

async function teamsLoader() {
  return {
    teams,
  };
}

const teamsAction = async ({ request }) => {
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
    case "DELETE": {
      const formData = await request.formData();
      let id = formData.get("id");

      console.log(id);

      teams = teams.filter((team) => team.id !== id);

      return redirect("/team");
    }
    default: {
      return null;
    }
  }
};

async function teamLoader({ params }) {
  const team = teams.find((team) => team.id === params.id);

  return {
    team,
  };
}

const teamAction = ({ request, params }) => {
  switch (request.method) {
    case "DELETE": {
      console.log(params.id);

      teams = teams.filter((team) => team.id !== params.id);

      return redirect("/team");
    }
    default: {
      return null;
    }
  }
};

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
            action: teamAction,
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
