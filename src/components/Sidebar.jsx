import { NavLink } from "react-router-dom";
import img from "../image/my-photo.jpg"
const Sidebar = () => {
  return (
    <div className="bg-red-400 h-screen">
      <div>
        <div>
                  <div className="avatar pt-10 block">
                        <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img className="" src={img} />
                        </div>
                   </div>
                   <div className="text-center">
            <h2 className="text-2xl pt-5 font-semibold">Md Shijan ALi</h2>
            <p className="text-xl">shijan135@gmail.com</p>
                   </div>

        </div>
        <hr className="my-10" />
        <div>
          <ul>
            <li className="text-xl p-3 pl-10 hover:bg-emerald-700"><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li className="text-xl p-3 pl-10 hover:bg-emerald-700"><NavLink to="/add-note">Add Note</NavLink></li>
            <li className="text-xl p-3 pl-10 hover:bg-emerald-700"><NavLink to="logout">Logout</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;