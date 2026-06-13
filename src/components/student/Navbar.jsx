// react / external libraries
import { useClerk, UserButton, useUser } from "@clerk/react";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// assets
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const {navigate, isEducator} = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={`relative flex items-center justify-between border-b border-gray-600 px-4 py-4 sm:px-8 md:px-12 lg:px-24 ${
        isCourseListPage ? "bg-white" : "bg-green-100/70"
      }`}
    >
      {/* Logo */}
      <img onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-28 cursor-pointer sm:w-32 lg:w-36"
      />

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-5 md:flex">
        {user && (
          <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
            <button onClick={() => navigate("/educator")} className="transition lg:hover:text-green-700 cursor-pointer">
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>

            <span className="h-4 w-px bg-gray-300" />

            <Link
              to="/my-enrollments"
              className="transition lg:hover:text-green-700"
            >
              My Enrollments
            </Link>
          </div>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 lg:hover:bg-green-700 lg:hover:shadow-md lg:hover:shadow-green-200"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-2 md:hidden">
        {user && (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-full p-2 transition lg:hover:bg-white/50"
            >
              <EllipsisVertical className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                <button onClick={() => navigate("/educator")} className="w-full px-4 py-3 text-left text-sm text-gray-700 transition lg:hover:bg-green-50">
                  {isEducator ? "Educator Dashboard": "Become Educator"}
                </button>

                <Link
                  to="/my-enrollments"
                  className="block px-4 py-3 text-sm text-gray-700 transition lg:hover:bg-green-50"
                >
                  My Enrollments
                </Link>
              </div>
            )}
          </div>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="rounded-full border border-gray-200 p-2 bg-white"
          >
            <img src={assets.user_icon} alt="user" className="w-5" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
