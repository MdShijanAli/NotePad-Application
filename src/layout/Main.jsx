import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
        <Sidebar />
      </div>
        <div className="col-span-3">
        <Outlet />
      </div>
       </div>
     
    </div>
  );
};

export default Main;