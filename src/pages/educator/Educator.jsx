import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/react";
import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";
import Loading from "../../components/student/Loading";

const Educator = () => {
  const {user} = useUser();
  return user ? (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  ) : <Loading />;
};

export default Educator;
