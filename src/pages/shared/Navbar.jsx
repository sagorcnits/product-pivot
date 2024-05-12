import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";

const Navbar = () => {
  const { user, signOutUser, loaded, setLoaded } = useContext(AuthContext);

  return (
    <div className="border-b py-2">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink>
                <li>Home</li>
              </NavLink>
              <NavLink>
                <li>Queries</li>
              </NavLink>
              <NavLink>
                <li>Recommendations For Me</li>
              </NavLink>
              <NavLink>
                <li>My Queries </li>
              </NavLink>
              <NavLink>
                <li>My recommendations</li>
              </NavLink>
            </ul>
          </div>
          <a className="font-bold text-2xl ">ProductPivot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 *:text-[16px] font-Inter font-semibold">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/queries">
              <li>Queries</li>
            </NavLink>
            { user && <>
            <NavLink to="/recommendation-for-me">
              <li>Recommendations For Me</li>
            </NavLink>
            <NavLink to="/myqueries">
              <li>My Queries </li>
            </NavLink>
            <NavLink to="/myrecommend">
              <li>My recommendations</li>
            </NavLink></>}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <NavLink to="/login">
              <button onClick={signOutUser} className="button font-Inter text-[16px] font-semibold">
                Log Out
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="button font-Inter text-[16px] font-semibold">
                Log In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
