import { Outlet, Link, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>Data APIs Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <ScrollRestoration
        getKey={(location, matches) => {
          console.log(location, matches);
          if (location.pathname.startsWith("/team/")) return "team/:id";
          // default behavior
          return location.pathname;
        }}
      />
    </div>
  );
}
