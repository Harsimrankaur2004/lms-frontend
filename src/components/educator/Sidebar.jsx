import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/educator",
      icon: assets.home_icon,
    },
    {
      name: "Add Course",
      path: "/educator/add-course",
      icon: assets.add_icon,
    },
    {
      name: "My Courses",
      path: "/educator/my-courses",
      icon: assets.my_course_icon,
    },
    {
      name: "Students",
      path: "/educator/student-enrolled",
      icon: assets.person_tick_icon,
    },
  ];

  if (!isEducator) return null;

  return (
    <aside className="w-16 md:w-64 min-h-screen bg-white border-r border-gray-500">

      {/* Menu */}
      <div className="p-2 md:p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/educator"}
            className={({ isActive }) =>
              `group flex items-center md:justify-start justify-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
              
              ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-5 h-5 ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />

                <span className="hidden md:block font-medium">
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;