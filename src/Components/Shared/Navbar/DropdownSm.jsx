import { useState } from "react";
import { Link } from "react-router-dom";


const DropdownSm = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div onClick={() => setIsOpen(!isOpen)} className="group flex gap-2 ">
        <div className="relative flex flex-1 cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300 hover:text-primary">
          {navItem?.name}
        </div>
        <svg
          className={`${isOpen ? "rotate-0" : "-rotate-180"}  group stroke-slate-600 duration-200    group-hover:stroke-primary`}
          width={18}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M7 10L12 15L17 10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>
      <div
        className={`grid ${isOpen ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr]"} w-full justify-between gap-2 rounded-lg    bg-white duration-500`}
      >
        <div className="w-full space-y-4 overflow-hidden">
          {navItem?.subService?.map((service, idx) => (
            <Link
              onClick={() => setIsOpen(false)}
              to={`/service/${service?.route}`}
              key={idx}
              className="flex items-center gap-4 bg-slate-50 p-2 hover:bg-red-50"
            >
              <span className="text-xs">{service?.icon}</span>
              <span className="text-xs text-black">{service?.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownSm;