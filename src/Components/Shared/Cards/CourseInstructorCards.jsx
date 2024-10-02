import { FaStar, FaPlayCircle } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

const CourseInstructorCards = ({ content }) => {
  const { img, name, profession, students, rating, courses, details } = content;

  return (
    <div className="border border-gray-200 bg-white text-default dark:border-gray-700 dark:bg-darkBackground dark:text-darkText">
      <div className="flex flex-col items-start justify-center gap-10 p-8 md:flex-row">
        <img
          src={img}
          alt={name}
          className="size-[100px] rounded-full lg:size-[150px]"
        />
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-sm text-grayDefault dark:text-darkGray">
              {profession}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 lg:flex-row lg:items-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-default dark:text-darkText md:text-sm">
              <FaStar className="text-orangeDefault" /> {rating}
              <span className="text-grayDefault dark:text-darkGray">
                কোর্স রেটিং
              </span>
            </p>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-default dark:text-darkText md:text-sm">
              <GoPeople className="text-indigo-600 lg:text-lg" /> {students}
              <span className="text-grayDefault dark:text-darkGray">
                শিক্ষার্থী
              </span>
            </p>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-default dark:text-darkText md:text-sm">
              <FaPlayCircle className="text-orangeDefault" /> {courses}
              <span className="text-grayDefault dark:text-darkGray">
                কোর্সসমূহ
              </span>
            </p>
          </div>
          <p className="text-wrap text-xs text-grayDefault dark:text-darkGray md:text-sm">
            {details}
            <span className="font-medium text-blue-600 dark:text-darkText">
              আরও পড়ুন
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorCards;
