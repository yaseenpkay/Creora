import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>Creora</Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/purchase")}
              className="flex rounded-full items-center bg-green-200 px-4 py-1 sm:px-6  sm:py-3 hover:scale-105 duration-500"
            >
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits Remaining : 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Matha Faka</p>
            <div className="relative group">
              <div>User</div>
              <div className="absolute hidden group-hover:block top-0 right-0  z-10 text-black rounded pt-10">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm text-right">
                  <li className="cursor-pointer pr-10 py-1 px-2">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              className="cursor-pointer "
              onClick={() => navigate("/purchase")}
            >
              Pricing{" "}
            </p>
            <button
              onClick={() => {
                setShowLogin(true);
              }}
              className="bg-black text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
