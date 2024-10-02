import useAuth from "@/Hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/newLogo.png";
import { DashboardData } from "../../../lib/Data/DashboardNavData";
import LayoutBar from "./LayoutBar";

const DesktopLayout = () => {
  // for notification
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  // logout
  const { logout, user } = useAuth();
  useEffect(() => {
    const storedClicked =
      JSON.parse(localStorage.getItem("clickedNotifications")) || [];
    const notificationsData =
      JSON.parse(localStorage.getItem("notificationsData")) || [];
    setHasNewNotifications(storedClicked.length < notificationsData.length);
  }, []);

  const handleNotificationClick = () => {
    const notificationsData =
      JSON.parse(localStorage.getItem("notificationsData")) || [];
    const updatedClicked = notificationsData.map((_, index) => index);
    localStorage.setItem(
      "clickedNotifications",
      JSON.stringify(updatedClicked),
    );
    setHasNewNotifications(false);
  };

  return (
    <div className="sticky top-0 hidden h-[100vh] w-full flex-col justify-between border-r bg-white py-10 drop-shadow-sm lg:flex">
      <div className="pl-7">
        <div>
          <Link to="/">
            <img src={logo} className="mr-auto max-w-[200px]" alt="Logo" />
          </Link>
        </div>
        <div className="mt-4 flex flex-col">
          {DashboardData.map((navItem, key) => (
            <div className="mb-5 flex flex-col gap-2" key={key}>
              <h3 className="text-[13px] font-medium text-[#637381]">
                {navItem.title}
              </h3>
              <div className="mt-3 flex flex-col gap-3 text-[14px] text-[#637381]">
                {navItem.routesData.map((item, _id) =>
                  item.underRoutes ? (
                    <LayoutBar item={item} key={_id} />
                  ) : (
                    <Link
                      key={_id}
                      to={item.route}
                      className="flex items-center gap-2"
                      onClick={
                        item.route === "/dashboard/notifications"
                          ? handleNotificationClick
                          : null
                      }
                    >
                      <item.icon className="text-[15px]" />
                      {item.title}
                      {item.route === "/dashboard/notifications" &&
                        hasNewNotifications && (
                          <span className="ml-2 h-2 w-2 rounded-full bg-orange-400"></span>
                        )}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-7 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Hi, {user?.name}</h4>
          <p className="flex flex-col text-sm text-gray-600">
            <span>Leaving?</span>
            <span>Log out here</span>
          </p>
        </div>
        {user && (
          <button
            className=" w-full  justify-center gap-3 rounded-md border border-primary bg-primary px-4 py-2 text-sm text-white duration-300 md:text-base  lg:flex "
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default DesktopLayout;
