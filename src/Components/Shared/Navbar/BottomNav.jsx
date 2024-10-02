import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdPortrait } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const navMenuArray = [
    {
      name: "Home",
      path: "/",
      icon: <GoHome />,
    },
    {
      name: "About Us",
      path: "/about-us",
      icon: <MdPortrait />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <IoBookOutline />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <LuUser2 />,
    },
  ];
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white py-4 lg:hidden dark:darkBackground dark:bg-darkBackground">
      <div className={`flex items-center justify-around  `}>
        {navMenuArray.map((item, idx) => {
          return (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                 isActive
                    ? "text-primary  "
                    : "text-gray-500"
              }
            >
              <div key={idx} className="flex flex-col items-center space-y-1 ">
                <span className="text-base sm:text-xl">
                  {item.icon}
                </span>
                <h1 className="text-nowrap text-xs  font-medium sm:text-sm">
                  {item.name}
                </h1>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
