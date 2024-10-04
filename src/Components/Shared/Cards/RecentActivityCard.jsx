import { BookOpen } from "lucide-react";


const RecentActivityCard = ({activity}) => {
    return (
        <div  className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-indigo-600 " />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 truncate">{activity.title}</p>
          <p className="text-sm text-gray-500">{activity.time}</p>
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          {activity.score || activity.status || activity.duration || activity.progress || activity.grade}
        </div>
      </div>
    );
};

export default RecentActivityCard;