import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function InitialLayout() {
  return (
    <div className="flex">
      <div className="lg:w-[20%]">
        <SideBar />
      </div>
      <div className="lg:w-[80%] xs:w-[100%]">
        <Outlet />
      </div>
    </div>
  );
}
