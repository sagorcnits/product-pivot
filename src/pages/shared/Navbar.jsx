import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";

const Navbar = () => {
  const { user, signOutUser, setLocalTheme } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  // console.log(user)

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      setLocalTheme("dark");
    } else {
      setTheme("light");
      setLocalTheme("light");
    }
  };

  return (
    <div className="border-b border-dashed py-2">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
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
              className="menu menu-sm dropdown-content mt-3  py-2  shadow bg-base-100  rounded-lg w-52 z-50"
            >
              <NavLink to="/">
                <li className="py-2 hover:text-bgColor duration-500 font-Inter text-[18px]">Home</li>
              </NavLink>
              <NavLink to="/queries">
                <li className="py-2 hover:text-bgColor duration-500 font-Inter text-[18px]">
                  Queries
                </li>
              </NavLink>
              {user && (
                <>
                  <NavLink to="/recommendation-for-me">
                    <li className="py-2 hover:text-bgColor duration-500 font-Inter text-[18px]">
                      Recommendations For Me
                    </li>
                  </NavLink>
                  <NavLink to="/myqueries">
                    <li className="py-2 hover:text-bgColor duration-500 font-Inter text-[18px]">
                      My Queries{" "}
                    </li>
                  </NavLink>
                  <NavLink to="/myrecommend">
                    <li className="py-2 hover:text-bgColor duration-500 font-Inter text-[18px]">
                      My recommendations
                    </li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <a className="font-bold text-2xl hidden md:block">ProductPivot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 *:text-[16px] font-Inter font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-bgColor duration-500">Home</li>
            </NavLink>
            <NavLink to="/queries">
              <li className="hover:text-bgColor duration-500">Queries</li>
            </NavLink>
            {user && (
              <>
                <NavLink to="/recommendation-for-me">
                  <li className="hover:text-bgColor duration-500">Recommendations For Me</li>
                </NavLink>
                <NavLink to="/myqueries">
                  <li className="hover:text-bgColor duration-500">My Queries </li>
                </NavLink>
                <NavLink to="/myrecommend">
                  <li className="hover:text-bgColor duration-500">My recommendations</li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleTheme}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              checked={theme === "light" ? false : true}
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <NavLink to="/login">
              <button
                onClick={signOutUser}
                className="button font-Inter text-[16px] font-semibold"
              >
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
