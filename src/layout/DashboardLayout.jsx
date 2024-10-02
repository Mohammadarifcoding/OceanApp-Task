import { Outlet } from "react-router-dom";
import DesktopLayout from './LayoutComponents/DesktopLayout';
import MobileLayout from "./LayoutComponents/MobileLayout";


const DashboardLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[270px]">
        <DesktopLayout />
      </div>
      <MobileLayout />
      <div className="lg:w-[calc(100%-270px)] bg-gray-50 w-full pb-20">
        <Outlet />
      </div>
    </div>

  );
};

export default DashboardLayout;