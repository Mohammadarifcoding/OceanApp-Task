import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[999]" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 cursor-pointer p-2 text-slate-500 duration-300 hover:text-primary"
      >
        <div className="relative flex flex-col gap-[2px]">
          {navItem?.name}
        </div>
        <svg
          className={`${isOpen ? "rotate-180" : "rotate-0"} group stroke-slate-600 duration-200 group-hover:stroke-primary`}
          width={18}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      <div
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-full max-w-[250px] rounded-lg bg-white shadow-md transition-all duration-300 ${
          isOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        } md:top-[80px] md:left-0 md:translate-x-0 md:w-max md:max-w-[250px]`}
      >
        {navItem?.subRoute?.map((service, idx) => (
          <Link
            onClick={() => setIsOpen(false)}
            to={`/${service.toLowerCase().replace(/\s+/g, '-')}`} 
            key={idx}
            className="flex h-[60px] items-center px-4 font-medium text-slate-600 duration-300 hover:bg-primary/10 hover:text-black"
          >
            <span className="text-sm">{service}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
