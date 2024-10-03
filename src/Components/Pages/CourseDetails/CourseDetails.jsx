import { CourseData } from "@/lib/Data/CourseData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book, FileText, Camera } from "lucide-react";
import Container from "@/Components/Shared/Container/Container";
import { FaCalendar, FaCamera, FaClock, FaUsers } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    const FindData = CourseData.find((c) => c.course == id);
    setCourse(FindData);
  }, [id]);

  return (
    <Container>
      {course ? (
        <div className="mx-auto   p-2 sm:p-4 md:p-8">
          <div className="relative mb-8">
            <img
              src={course?.image}
              alt={course?.course}
              className="h-80 w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white p-2 shadow">
              <span className="flex items-center text-sm font-semibold text-gray-700">
                <Camera className="mr-1 h-4 w-4 text-blue-500" />
                {course?.category}
              </span>
            </div>
          </div>
          <div className="mb-8 grid  grid-cols-1 gap-6 md:grid-cols-2">
            <Feature
              item={{ icon: FaCamera }}
              type={"Category"}
              value={course?.category}
            />
            <Feature
              item={{ icon: FaClock }}
              type={"Duration"}
              value={course?.deadline}
            />
            <Feature
              item={{ icon: FaCalendar }}
              type={"Schedule"}
              value={course?.schedule}
            />
            <Feature
              item={{ icon: FaUsers }}
              type={"Enrollment"}
              value={`${course?.students} + (Limit: ${course?.enrollmentLimit})`}
            />
          </div>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Course Description
            </h2>
            <p className="leading-relaxed text-gray-700">
              {course?.description}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Course Details
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Feature type={"Start Date"} value={course?.startDate} />
              <Feature type={"End Date"} value={course?.endDate} />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Prerequisites
            </h2>
            <ul className="list-inside list-disc text-gray-700 ">
              {course?.prerequisites?.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Course Syllabus
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {course?.syllabus?.map((week, index) => (
                <div key={index} className="flex items-start">
                  <Book className="mr-2 mt-1 h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-700">{`Week ${index + 1}`}</h3>
                    <p className="text-gray-600">{week.split(": ")[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Course Materials
            </h2>
            <ul className="space-y-2">
              {course?.materials?.map((material, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Pricing
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">
                ৳{course?.discountedPrice}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ৳{course?.actualPrice}
              </span>
              <span className="text-lg font-semibold text-red-500">
                {Math.round(
                  (1 - course?.discountedPrice / course?.actualPrice) * 100,
                )}
                % OFF
              </span>
            </div>
          </section>

          <div className="mb-10 flex items-center justify-center sm:justify-end">
            <button className="flex items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600">
              <Book className="mr-2 h-5 w-5" />
              Enroll Now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default CourseDetails;

const Feature = ({ item, type, value }) => {
  return (
    <div className="flex items-center gap-3">
      {item && <item.icon className="h-6 w-6 text-blue-500" />}

      <div>
        <h3 className="text-sm font-semibold text-gray-500">{type}</h3>
        <p className="text-gray-700 sm:text-lg">{value}</p>
      </div>
    </div>
  );
};
