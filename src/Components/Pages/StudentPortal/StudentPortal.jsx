import Container from "@/Components/Shared/Container/Container";
import Description from "@/Components/Shared/Text/Description";
import Title from "@/Components/Shared/Text/Title";
import imageAnime from "/public/portalanimation.png";
import { statsData } from "@/lib/Data/StudentStatsData";
import StatsBox from "@/Components/Shared/StatsBox/StatsBox";

const StudentPortal = () => {
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  mt-7 ">
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
      </div>
    </Container>
  );
};

export default StudentPortal;
