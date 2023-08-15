import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function Layout() {
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<>Home</>} />
      <Route path="about" element={<>About</>} />
      <Route path="dashboard" element={<>Dashboard</>} />
      <Route path="*" element={<>Not Found</>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
