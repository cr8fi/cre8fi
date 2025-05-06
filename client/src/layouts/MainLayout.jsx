import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
