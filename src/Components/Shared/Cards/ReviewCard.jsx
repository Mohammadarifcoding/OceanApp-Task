import { MdOutlineStarPurple500 } from "react-icons/md";

const ReviewCard = ({ data }) => {
  const { profile, name, date, review } = data;

  return (
    <div className="flex items-start gap-3 border-b pb-4 dark:border-gray-700">
      <div className="w-10">
        <img
          src={profile}
          className="w-full rounded-full"
          alt={`${name}'s profile`}
        />
      </div>
      <div className="flex flex-col gap-2 w-[calc(100%-40px)]">
        {/* Name and Date */}
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-default dark:text-darkText">
            {name}
          </h3>
          <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
          <span className="text-gray-600 text-[12px] dark:text-gray-400">
            {date}
          </span>
        </div>
        {/* Rating */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((item, key) => (
            <MdOutlineStarPurple500
              key={key}
              className="text-orange-500 dark:text-yellow-400"
            />
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-800 dark:text-gray-200">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
