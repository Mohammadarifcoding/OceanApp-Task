import moment from "moment";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

const FeedbackCard = ({ data }) => {
  const { title, description, student, img, date, rating } = data;
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 h-[340px] bg-white p-4 shadow-md">
      <div className="flex flex-col items-center space-y-3">
        {/* User Icon */}
        <div className="rounded-full bg-gray-100 p-2">
          <img src={img} className="h-12 w-12 rounded-full object-cover" />
        </div>

        {/* Name and Course Title */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <p className="text-xs text-gray-600">{student}</p>
        </div>

        {/* Date */}
        <div className="flex items-center text-xs text-gray-500">
          <FaCalendarAlt className="mr-1" />
          <span>{moment(date).format('MMMM D, YYYY')}</span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="text-lg">
              {star <= rating ? (
                <AiFillStar className="text-yellow-500" />
              ) : (
                <AiOutlineStar className="text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm text-center text-gray-700">
          {description.length <= 150 ? (
            description
          ) : (
            <>
              {description.slice(0, 150)}...
              <span className="text-blue-500 cursor-pointer">see more</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
