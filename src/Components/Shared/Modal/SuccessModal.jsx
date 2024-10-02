import { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SuccessModal = ({ name, text }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md bg-indigo-600 px-4 py-[6px] text-white"
      >
        {name}
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${openModal ? "opacity-1 visible" : "invisible opacity-0"} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-96 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? "opacity-1 translate-y-0 duration-300" : "translate-y-20 opacity-0 duration-150"}`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <IoCheckmarkDoneCircleOutline className="text-8xl text-primary" />
            <h6 className="text-center text-2xl font-medium opacity-70">
              Successfully {text}
            </h6>
            <div className="flex gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md bg-primary px-6 py-2 text-sm text-white hover:border hover:border-primary hover:bg-transparent hover:text-primary"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
