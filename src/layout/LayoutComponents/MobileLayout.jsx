import { useState } from "react";
import Drawer from "react-modern-drawer";
import logo from "/logo/logo.png"
import "react-modern-drawer/dist/index.css";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

import LayoutBar from "./LayoutBar";
import { DashboardData } from "../../lib/Data/DashboardNavData";
import Button from "../../Components/Shared/Button/Button";

const MobileLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className=" w-full px-3 py-3  lg:hidden">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex gap-2 items-center cursor-pointer">
            <img src={logo} className=" max-w-[40px]" alt="Logo" />
            <h2 className="text-xl font-semibold text-primary">Ed Learn</h2>
          </Link>

          <button
            onClick={toggleDrawer}
            className=" hover:bg-foundation/60 p-2 text-xl "
          >
            <IoIosMenu />
          </button>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="flex    min-h-[100vh] w-full flex-col justify-between border-r bg-white py-10  drop-shadow-sm lg:hidden">
            {/* user  */}
            <div className="pl-4">
              <div className=" ">
                <Link to="/">
                  {/* <img src={logo} className="mr-auto max-w-[200px]" alt="" /> */}
                </Link>
              </div>
              <div className="mt-4 flex flex-col ">
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
                          <Link key={_id} className="flex  items-center gap-2">
                            <item.icon /> {item.title}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-4 flex flex-col items-center justify-center gap-3 text-center">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Hi, Arif Khan</h4>
                <p className="flex flex-col text-sm text-gray-600">
                  {" "}
                  <span>Leaving?</span>
                  <span>Log out here</span>
                </p>
              </div>

              <Button className="w-full text-white ">Log Out</Button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileLayout;
