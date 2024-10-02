import { MdWatchLater } from "react-icons/md";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { RiGraduationCapFill } from "react-icons/ri";
import avatar from "../../../assets/Review/avatar.png";
import { Link } from "react-router-dom";

const MyCoursesCard = ({ content, btn1, btn2, showProgress, link1 }) => {
  const { image, course, category, students, deadline, teacher, progress } =
    content;
  return (
    <div className="flex md:w-[800px] flex-col items-center justify-start gap-5 rounded-lg bg-white drop-shadow-md md:max-w-5xl  md:flex-row">
      <div className="flex items-center justify-center ">
        <img
          src={image}
          className="h-52 w-full rounded-l-lg md:h-64 md:max-w-[350px] "
          alt=""
        />
      </div>
      <div className="space-y-3 px-3 py-3 md:pr-10">
        <p className=" font-semibold">{course}</p>
        <p className="text-grayDefault">{category}</p>

        <div className="flex items-start justify-start gap-3 text-xs md:items-center md:gap-8">
          <p className="flex items-center justify-center gap-2 font-medium text-gray-500">
            <RiGraduationCapFill className="text-sm text-primary" />
            {students}
          </p>
          <p className="flex  items-center justify-center gap-2 font-medium text-gray-500">
            <MdWatchLater className="text-sm text-primary" /> {deadline}
          </p>
        </div>
        <div className="flex items-start justify-start gap-3 text-sm md:items-center">
          <img className="w-7 rounded-full" src={avatar} alt="" />
          <p className="font-medium text-grayDefault">{teacher}</p>
        </div>
        {/* progress bar*/}
        {showProgress && <ProgressBar progress={progress} />}
        {/* buttons */}
        <div className="flex items-center justify-start gap-3 ">
          <Link to={link1}>
            <Button className="px-2 text-white md:px-3 md:text-sm">
              {btn1}
            </Button>
          </Link>
          {/* 2nd button  */}
          <Button className="bg-transparent px-2 text-primary hover:bg-primary hover:text-white md:px-3 md:text-sm">
            {btn2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
