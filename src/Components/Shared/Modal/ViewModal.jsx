import { useState } from "react";
import { IoClose } from "react-icons/io5";
import man from "../../../assets/instructors/man1.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaFileDownload } from "react-icons/fa";

const ViewModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="group flex  min-w-full cursor-pointer items-center justify-center gap-2 rounded-md border   border-orangeDefault  bg-orangeDefault/10 px-6  py-2  text-xs font-semibold text-orangeDefault duration-200 hover:border hover:border-none hover:bg-orangeDefault hover:text-white md:min-w-[80px] md:px-1 md:text-xs"
      >
        View
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] w-screen ${openModal ? "visible opacity-100" : "invisible opacity-0"} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute max-w-xl rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? "opacity-1 duration-300" : "scale-110 opacity-0 duration-150"}`}
        >
          <IoClose
            onClick={() => setOpenModal(false)}
            className="absolute right-3 top-3 cursor-pointer fill-zinc-600 text-xl dark:fill-white"
          />
          <h1 className="mb-8 text-xl font-semibold">Notification</h1>

          <div className="flex flex-col items-start justify-start gap-6 md:flex-row">
            <div className="lg:w-[25%]">
              <img
                className="size-24 rounded-full bg-slate-500 object-cover md:size-52 md:h-[60px] md:w-[60px]"
                src={man}
                alt="instructor image"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-sm text-gray-500 ">
                A new class notification from
                <span className="font-medium ml-1 text-black md:text-base">
                  FoundX Part 1 release
                </span>
              </h2>
              <p>Competitive Programming 101 new video released.Master the basics of problem-solving with the latest Competitive Programming 101 video!</p>
              <div>
                <Link
                  className="text-sm "
                  to="https://youtu.be/eDqfg_LexCQ?si=8-Quu1GTN1UZTzRy"
                >
                  Click Here: <br className="md:hidden" />
                  <span className="border-b border-blue-700 text-blue-700 md:ml-1">
                    https://youtu.be/eDqfg_LexCQ?si=8-Quu1GTN1UZTzRy
                  </span>
                </Link>
              </div>
              <Button className="py-2 text-white md:text-sm">
                <FaFileDownload />
                Download
              </Button>
              <p className="text-xs text-gray-400">a day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
