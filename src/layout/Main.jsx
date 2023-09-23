import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../utilities/AuthProvider/AuthProvider";
import { useContext } from "react";

const Main = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {
        user ? <div className="md:grid md:grid-cols-4 grid-cols-1">
        <div>
        <Sidebar />
      </div>
        <div className="md:col-span-3">
        <Outlet />
      </div>
        </div> :
          <Outlet />
      }
     
    </div>
  );
};

export default Main;