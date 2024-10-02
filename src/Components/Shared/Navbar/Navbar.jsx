import { useState, useEffect } from "react";
import { IoIosSearch, IoIosMenu, IoIosClose, IoIosLogIn } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import lightLogo from "../../../assets/logo/newLogo.png"; // Light mode logo
import darkLogo from "../../../assets/logo/newLogo2.png"; // Dark mode logo
import Dropdown from "./Dropdown";
import Button from "../Button/Button";
import Switch from "../Button/Switch";
import useAuth from "@/Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve saved dark mode preference from localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Save dark mode preference to localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const navMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    {
      id: 3,
      name: "Courses",
      link: "/courses",
      subRoute: ["All Courses", "HSC-22 Test Paper Solving Course", "English"],
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm transition-colors duration-300 dark:bg-gray-800">
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-2 py-6 md:px-6 lg:px-12 xl:gap-10">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={isDarkMode ? darkLogo : lightLogo}
              className="max-w-[60%]"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center gap-8">
          {/* Search bar for larger screens */}
          <div className="relative hidden w-full rounded-full border border-gray-300 py-2 pl-12 pr-4 dark:border-gray-600 md:block">
            <label
              className="absolute left-4 top-[50%] -translate-y-1/2 text-[26px] text-gray-500 dark:text-gray-300"
              htmlFor="search"
            >
              <IoIosSearch />
            </label>
            <input
              id="search"
              placeholder="আপনার কোর্স সার্চ করুন..."
              className="border-none bg-transparent text-sm outline-none focus:border-none focus:outline-none dark:bg-transparent dark:text-gray-200"
              type="text"
            />
          </div>

          {/* Menu for large devices */}
          <div className="hidden items-center gap-4 lg:flex">
            {navMenu.map((menu) => (
              <div key={menu.id}>
                {menu.subRoute ? (
                  <Dropdown navItem={menu} />
                ) : (
                  <Link
                    className="text-slate-500 duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                    to={menu.link}
                  >
                    {menu.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <Switch checked={isDarkMode} onChange={handleDarkModeToggle} />

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoIosClose className="text-3xl text-gray-700 dark:text-gray-300" />
            ) : (
              <IoIosMenu className="text-3xl text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden gap-4 lg:flex">
          <Link to="/register">
            <Button className="rounded-full border-[1px] border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
              Register
            </Button>
          </Link>
          {user ? (
            <Link to="/dashboard">
              <Button className="min-w-[150px] rounded-full border-default bg-default text-white hover:border-default hover:bg-default hover:text-white md:text-xs">
                <IoIosLogIn className="text-2xl" /> My Account
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="rounded-full border-default bg-default text-white hover:border-default hover:bg-default hover:text-white ">
                <RiUserLine className="text-base font-bold md:text-xl" /> Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-4 pb-4 lg:hidden">
          {navMenu.map((menu) => (
            <div key={menu.id} className="mb-2">
              {menu.subRoute ? (
                <Dropdown navItem={menu} />
              ) : (
                <Link
                  className="block py-2 text-slate-500 duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  to={menu.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-full border-[1px] border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                Register
              </Button>
            </Link>

            <div className=" ">
              {user ? (
                <Link to="/dashboard">
                  <Button className="w-full min-w-[150px] rounded-full border-default bg-default text-white hover:border-default hover:bg-default hover:text-white md:text-xs">
                    <IoIosLogIn className="text-2xl" /> My Account
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button className="rounded-full border-default bg-default text-white hover:border-default hover:bg-default hover:text-white ">
                    <RiUserLine className="text-base font-bold md:text-xl" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
