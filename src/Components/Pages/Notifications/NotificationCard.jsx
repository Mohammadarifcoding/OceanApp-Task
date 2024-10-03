
import {
    AlertCircle,
    Bell,
    Book,
    Calendar,
    MessageCircle,
    X,
  } from "lucide-react";
const NotificationCard = ({notification, setData,data}) => {
    const getIcon = (type) => {
        switch (type) {
          case "course":
            return <Book className="h-6 w-6 text-blue-500" />;
          case "assignment":
            return <Calendar className="h-6 w-6 text-green-500" />;
          case "message":
            return <MessageCircle className="h-6 w-6 text-purple-500" />;
          case "reminder":
            return <Bell className="h-6 w-6 text-yellow-500" />;
          case "system":
            return <AlertCircle className="h-6 w-6 text-red-500" />;
        }
      };
      const deletenotification = (id)=>{
        const FilteringData = data?.filter((item)=> item.id != id)
        setData([...FilteringData])

      }
    return (
        <div
        className={`flex items-start border-b p-4 last:border-b-0 ${
          notification.read ? "bg-white" : "bg-blue-50"
        }`}
      >
        <div className="mr-4 flex-shrink-0">
          {getIcon(notification.type)}
        </div>
        <div className="flex-grow">
          <h2 className="mb-1 text-lg font-semibold text-gray-800">
            {notification.title}
          </h2>
          <p className="mb-2 text-gray-600">{notification.description}</p>
          <p className="text-sm text-gray-500">{notification.time}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          {!notification.read && (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
              New
            </span>
          )}
        </div>
        <button onClick={()=>{deletenotification(notification.id)}} className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500">
          <X className="h-5 w-5" />
          <span className="sr-only">Dismiss notification</span>
        </button>
      </div>
    );
};

export default NotificationCard;