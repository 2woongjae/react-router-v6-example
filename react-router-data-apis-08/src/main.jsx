import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Layout from "./routes/Layout";
import TeamLayout from "./routes/TeamLayout";
import Team from "./routes/Team";
import TeamError from "./routes/TeamError";

let teams = [
  { id: "1", name: "Red" },
  { id: "2", name: "Blue" },
  { id: "3", name: "Green" },
];

async function teamsLoader() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  // throw new Error("Hello");

  return {
    teams,
  };
}

const teamsAction = async ({ request }) => {
  console.log(request);

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
      const id = formData.get("id");

      teams = teams.filter((team) => team.id !== id);

      return redirect("/team");
    }
    default: {
      throw new Response("", { status: 405 });
    }
  }
};

async function teamLoader({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const team = teams.find((team) => team.id === params.id);

  return {
    team,
  };
}

// const teamAction = ({ request, params }) => {
//   switch (request.method) {
//     case "DELETE": {
//       teams = teams.filter((team) => team.id !== params.id);

//       return redirect("/team");
//     }
//     default: {
//       throw new Response("", { status: 405 });
//     }
//   }
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>Layout Error</>,
    children: [
      {
        index: true,
        loader: async ({ request, params }) => {
          const { default: loader } = await import("./loaders/homeLoader");

          return loader({ request, params });
        },
        lazy: () => import("./routes/Home"),
        // lazy: async () => {
        //   const { loader, default: Component } = await import("./routes/Home");
        //   return {
        //     loader,
        //     element: <Component />,
        //   };
        // },
      },
      {
        path: "about",
        lazy: () => import("./routes/About"),
      },
      { path: "dashboard", element: <>Dashboard</> },
      {
        path: "team",
        element: <TeamLayout />,
        errorElement: <>TeamLayout Error</>,
        loader: teamsLoader,
        action: teamsAction,
        children: [
          { index: true, element: <>Team Index</> },
          {
            path: ":id",
            element: <Team />,
            errorElement: <TeamError />,
            loader: teamLoader,
            // action: teamAction,
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
