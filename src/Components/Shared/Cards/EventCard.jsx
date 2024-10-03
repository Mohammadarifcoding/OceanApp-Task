const EventCard = ({ event }) => {
  return (
    <li className="flex items-center justify-between border-b pb-4 sm:flex-row flex-col gap-4">
      <div className="flex items-center gap-4 sm:flex-row flex-col">
        <event.icon className="h-6 w-6 text-blue-500" />

        <div className="flex flex-col sm:items-start items-center">
          <p className="text-lg font-semibold text-gray-700">{event.title}</p>
          <p className="text-gray-500 font-medium">{event.time}</p>
        </div>
      </div>
      {event.activities ? (
        <span className="text-gray-500 font-medium">{event.activities}</span>
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
