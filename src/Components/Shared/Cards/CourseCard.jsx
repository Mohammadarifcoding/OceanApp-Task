import { MdWatchLater } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import cn from '../../../lib/Data/cn';

const CourseCard = ({ content, className }) => {
  const { id, image, name, category, course, deadline, students, actualPrice, discountedPrice } = content;
  return (
    <div
      className={cn(
        'relative mx-auto min-h-[400px] w-full max-w-[300px] rounded-lg bg-white text-default transition-shadow hover:shadow-lg dark:bg-gray-800 dark:text-white md:max-w-[350px]',
        className,
        'border border-gray-200 dark:border-none' // Always add border but remove in dark mode
      )}
    >
      {/* Card Image */}
      <img src={image} className="h-64 w-full max-w-[350px] rounded-t-lg md:max-w-[100%]" alt={course} />

      {/* Card Category (Absolute Position) */}
      <div className="absolute left-4 top-4">
        <p className="rounded-lg bg-gray-700 px-3 py-2 text-center text-xs text-gray-200">{category}</p>
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-3 p-4">
        <div className="space-y-2">
          <p className="text-xs font-medium">{name}</p>
          <h4 className="py-1 text-lg font-semibold">{course}</h4>
        </div>
        <div>
          <div className="flex items-center justify-start gap-8">
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              <MdWatchLater className="text-base text-primary" /> {deadline}
            </p>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              <RiGraduationCapFill className="text-base text-primary" />
              {students}
            </p>
          </div>

          <div className="my-5">
            <hr />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Display Prices */}
              {discountedPrice ? (
                <>
                  <p className="text-sm font-semibold text-gray-500 line-through dark:text-gray-400">{actualPrice} টাকা</p>
                  <p className="text-sm font-semibold text-green-500">{discountedPrice} টাকা</p>
                </>
              ) : (
                <p className="text-sm font-semibold text-gray-500 dark:text-white">{actualPrice} টাকা</p>
              )}
            </div>

            <Link to={`/course-details/${id}`}>
              {/*  <Link to={`/course-details/${id}`}> */}
              {/* to={`/course-details/${course.toLowerCase()}`} */}
              <button className="text-sm font-bold text-primary">বিস্তারিত দেখুন</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
