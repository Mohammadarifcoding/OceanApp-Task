import Button from "@/Components/Shared/Button/Button";
import TextInput from "@/Components/Shared/InputField/TextInput";
import Title from "@/Components/Shared/Text/Title";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CourseBuyModal = ({ setOpenModal, openModal }) => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend

    setOpenModal(false);
    toast("Successfully enrolled the course");
    navigation("/enroll-in-course");
  };
  return (
    <div className="mx-auto flex   items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${openModal ? "opacity-1 visible" : "invisible opacity-0"} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full max-w-[300px] rounded-lg bg-white shadow-xl sm:max-w-md"
        >
          <form
            className="rounded-xl bg-white p-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Title text="Fill the from"></Title>
            <div className="mt-6 flex flex-col gap-8">
              <TextInput
                register={register}
                name="name"
                type="text"
                label="Enter Your Name"
                className=""
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
              <TextInput
                register={register}
                name="email"
                type="text"
                label="Enter Your Email"
                className=""
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
              <TextInput
                register={register}
                name="phone"
                type="text"
                label="Enter Your Phone"
                className=""
              />
              {errors.phone && (
                <p className="text-xs text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div className="mt-5 flex justify-center">
              <Button className="w-full text-white">Confirm</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseBuyModal;
