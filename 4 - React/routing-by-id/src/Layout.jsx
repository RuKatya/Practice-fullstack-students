import { NavLink, Link, Outlet } from "react-router-dom";

const Loyout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <Link to="/">Home</Link> */}
        <NavLink to="orders">Orders</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Loyout;
