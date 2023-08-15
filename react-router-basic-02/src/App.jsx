import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Basic Example</h1>
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
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="about" element={<>About</>} />
        <Route path="dashboard" element={<>Dashboard</>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
