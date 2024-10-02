import { IoIosStar } from "react-icons/io";
import cn from "classnames"; // Assuming you're using 'classnames' for conditionally joining class names

const InstructorCards = ({ data }) => {
  const { img, name, profession, students, rating, className } = data;

  return (
    <div
      className={cn(
        "max-w-[300px] rounded-lg border bg-white dark:border-none dark:border-gray-700 dark:bg-gray-800",
        className,
      )}
    >
      <img src={img} className="h-48 w-[310px] rounded-t-lg" alt={name} />
      <div className="space-y-3 p-4">
        <div className="text-center">
          <p className="text-base font-semibold text-lightText dark:text-white">
            {name}
          </p>
          <h4 className="text-sm text-gray-500 dark:text-gray-300">
            {profession}
          </h4>
        </div>
        <div className="my-5">
          <hr className="border-gray-300 dark:border-gray-600" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-sm">
            <IoIosStar className="text-[#FD8E1F]" />
            <p className="text-lightText dark:text-gray-300">{rating}</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="font-semibold text-lightText dark:text-white">
              {students}
              <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-300">
                শিক্ষার্থী
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCards;
