
import { Link } from "react-router-dom";
// import logo from "../../../assets/logo/newLogo.png";
import { DashboardData } from "../../lib/Data/DashboardNavData";
import LayoutBar from "./LayoutBar";
import logo from "/logo/logo.png";

const DesktopLayout = () => {
  // for notification
  // logout

  return (
    <div className="sticky top-0 hidden h-[100vh] w-full flex-col justify-between border-r bg-white py-10 drop-shadow-sm lg:flex">
      <div className="pl-7">
        <div>
          <Link to="/" className="flex gap-2 items-center cursor-pointer">
            <img src={logo} className=" max-w-[40px]" alt="Logo" />
            <h2 className="text-xl font-semibold text-primary">Ed Learn</h2>
          </Link>
        </div>
        <div className="mt-10 flex flex-col">
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
                    >
                      <item.icon className="text-[15px]" />
                      {item.title}

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
          <h4 className="text-lg font-semibold">Hi, Arif</h4>
          <p className="flex flex-col text-sm text-gray-600">
            <span>Leaving?</span>
            <span>Log out here</span>
          </p>
        </div>
          <button
            className=" w-full  justify-center gap-3 rounded-md border border-primary bg-primary px-4 py-2 text-sm text-white duration-300 md:text-base  lg:flex "
            // onClick={logout}
          >
            Logout
          </button>
      </div>
    </div>
  );
};

export default DesktopLayout;
