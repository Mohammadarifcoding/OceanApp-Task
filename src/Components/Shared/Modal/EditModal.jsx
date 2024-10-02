import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import SelectInput from "../InputField/SelectInput";
import { IoCloseSharp } from "react-icons/io5";
import man from "../../../assets/instructors/man1.jpg";
import Button from "../Button/Button";
import { ImBlocked } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
const EditModal = () => {
  const [openModal, setOpenModal] = useState(false);
  // react hook form
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    const value = {
      ...data,
      roles,
      designations,
    };
    console.log("value", value);
  };
  // roles
  const [roles, setRoles] = useState("");
  const allRoles = ["Teacher", "Manager", "Assistant Manager"];
  // designation
  const [designations, setDesignations] = useState("");
  const allDesignations = ["Teacher", "Manager", "Assistant Manager"];
  return (
    <div className="mx-auto w-fit">
      <button
        onClick={() => setOpenModal(true)}
        className="flex cursor-pointer items-center gap-4 rounded-md bg-[#eceef0] px-4 py-2 font-semibold duration-200 active:bg-primary"
      >
        <FiEdit className="text-lg" /> Edit
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] w-screen ${openModal ? "visible opacity-100" : "invisible opacity-0"} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white lg:w-[500px] ${openModal ? "opacity-1 duration-300" : " scale-110 opacity-0 duration-150"}`}
        >
          <IoCloseSharp
            onClick={() => setOpenModal(false)}
            className="absolute right-3 top-3 cursor-pointer fill-zinc-600 text-2xl dark:fill-white"
          />
          <h1 className="mb-10 text-lg font-semibold">Edit Information</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-5 flex items-center gap-4">
              <img className="size-12 rounded-lg" src={man} alt="" />
              <h1 className="text-base font-semibold">Jhon Doe</h1>
            </div>

            <SelectInput
              name="role"
              label="Role"
              options={allRoles}
              defaultValue="Select Roles"
              setValue={setRoles}
            />
            <SelectInput
              name="designation"
              label="Designation"
              options={allDesignations}
              defaultValue="Select Designation"
              setValue={setDesignations}
            />
            <div className="flex flex-col items-start justify-start gap-5 md:flex-row">
              <Button className="min-w-[50px] border-red-600 bg-red-600 px-4  text-white hover:border-red-600 hover:text-red-600 md:text-xs ">
                <ImBlocked /> Block
              </Button>
              <Button className="min-w-[50px] border-red-600 bg-red-600 px-4  text-white hover:border-red-600 hover:text-red-600 md:text-xs ">
                <RiDeleteBin5Line />
                Delete
              </Button>
            </div>
          </form>

          <div className="flex justify-end gap-2 mt-3">
            <Button className="min-w-[100px]  text-white">Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
