import EventCard from "@/Components/Shared/Cards/EventCard";
import RecentActivityCard from "@/Components/Shared/Cards/RecentActivityCard";
import Container from "@/Components/Shared/Container/Container";
import StatsBox from "@/Components/Shared/StatsBox/StatsBox";
import Description from "@/Components/Shared/Text/Description";
import Title from "@/Components/Shared/Text/Title";
import { RecentActivityData } from "@/lib/Data/RecentActivity";
import { statsData } from "@/lib/Data/StudentStatsData";

import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import imageAnime from "/public/portalanimation.png";

const StudentPortal = () => {
  const upcomingEvents = [
    {
      id: 1,
      icon: FaCalendar, // You can map this to the Calendar icon
      title: "Google Analytics data",
      time: "Module opens at 12:00 AM",
      activities: "3 activities",
      showJoinButton: false,
    },
    {
      id: 2,
      icon: FaUser, // You can map this to the User icon
      title: "Q&A session with mentors",
      time: "03:00 PM - 05:00 PM",
      activities: null,
      showJoinButton: true,
    },
  ];


  return (
    <Container>
      <div className="flex flex-col ">
        {/* welcome student */}
        <div className="relative flex items-center justify-between rounded-xl bg-primary/90 p-4 sm:p-6">
          <div>
            <Title className={"text-white"} text="Hello, Arif" />
            <Description
              className={"text-base text-gray-200 sm:text-xl"}
              text="Welcome to your student potal"
            />
          </div>
          <img
            className="absolute right-10 hidden max-w-[150px] sm:flex"
            src={imageAnime}
          />
        </div>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3 ">
          {statsData.map((stat, index) => (
            <StatsBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-white p-6 shadow">
          <Title text="Upcoming Events" />

          <ul className="mt-5 flex flex-col gap-2">
            {upcomingEvents.map((event, idx) => (
              <EventCard event={event} key={idx} />
            ))}
          </ul>
        </div>
        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Recent Activity
          </h2>
          <div className="space-y-6">
            {RecentActivityData.map((activity, index) => (
              <RecentActivityCard activity={activity} key={index} />
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
};

export default StudentPortal;
