import { NavLink, Outlet } from "react-router-dom";
import "./router.css";

function RouterLayout() {
  return (
    <>
      <header className="nav-bar">
        <NavLink className="link" to="card">
          Card
        </NavLink>
        <NavLink className="link" to="register">
          Register
        </NavLink>
        <NavLink className="link" to="list">
          List
        </NavLink>
      </header>
      <main className="main">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RouterLayout;
