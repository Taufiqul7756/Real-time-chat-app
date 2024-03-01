import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log("navbar --- user", user);

  return (
    <nav className="bg-gray-800 mb-4 h-16">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <h2>
          <Link to="/" className="text-white text-lg font-bold">
            ChattApp
          </Link>
        </h2>

        <span className="text-yellow-700">
          {" "}
          Logged in as {user?.first_name} {user?.last_name}
        </span>

        <div className="">
          {user && (
            <>
              <Link
                onClick={() => logoutUser()}
                to="/login"
                className="text-white text-md font-bold"
              >
                Logout
              </Link>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="text-white text-md font-bold">
                Login
              </Link>

              <Link
                to="/register"
                className="text-white text-md ml-5 font-bold"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
