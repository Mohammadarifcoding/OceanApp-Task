import { BsArrowUp } from "react-icons/bs";

const ScrollBtn = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed  bottom-[100px] right-10">
      <div
        className="w-[44px] cursor-pointer rounded-full bg-default p-3 text-white "
        onClick={goToBtn}
      >
        <BsArrowUp className="text-xl" />
      </div>
    </div>
  );
};

export default ScrollBtn;
