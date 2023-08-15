import { Outlet, Link } from "react-router-dom";

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
    </div>
  );
}
