const EventCard = ({ event }) => {
  return (
    <li className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <event.icon className="h-6 w-6 text-blue-500" />

        <div>
          <p className="text-lg font-semibold text-gray-700">{event.title}</p>
          <p className="text-gray-500">{event.time}</p>
        </div>
      </div>
      {event.activities ? (
        <span className="text-sm text-gray-500">{event.activities}</span>
      ) : (
        event.showJoinButton && (
          <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
            Join the event
          </button>
        )
      )}
    </li>
  );
};

export default EventCard;
