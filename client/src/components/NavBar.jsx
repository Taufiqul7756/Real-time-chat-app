import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./Chat/Notifications";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="bg-[#ffffff] mb-4 h-16">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <h2>
          <Link to="/" className="text-[#808080] text-lg font-bold">
            Real time Chat App
          </Link>
        </h2>

        <span className="text-green-500 font-bold">
          {" "}
          {user?.first_name} {user?.last_name}
        </span>

        <div className="">
          {user && (
            <>
              <div className="flex justify-center items-center gap-3">
                <Notifications />
                <Link
                  onClick={() => logoutUser()}
                  to="/login"
                  className="text-[#808080] text-md font-bold "
                >
                  Logout
                </Link>
              </div>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="text-[#808080] text-md font-bold">
                Login
              </Link>

              <Link
                to="/register"
                className="text-[#808080] text-md ml-5 font-bold"
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
