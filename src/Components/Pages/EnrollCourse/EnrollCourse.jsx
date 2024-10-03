import CourseCard from "@/Components/Shared/Cards/CourseCard";
import Container from "@/Components/Shared/Container/Container";
import Title from "@/Components/Shared/Text/Title";
import { CourseData } from "@/lib/Data/CourseData";
import { useState } from "react";

const EnrollCourse = () => {
    const [data,setData] = useState([...CourseData])
    const SearchData =(value)=>{
        if(!value){
            setData([...CourseData])
          }
          const FindData = CourseData.filter((course)=> course.course.toLowerCase().includes(value.toLowerCase())   || course.category.toLowerCase().includes(value.toLowerCase()) || course.name.toLowerCase().includes(value.toLowerCase())   )
          setData([...FindData])
    }
  return (
    <Container>
      <div className="mb-10 flex items-center justify-between">
        <Title text="Faculty Overview"></Title>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search faculty..."
            className="rounded-md border px-3 py-2 focus:outline-none"
            onChange={(e) => SearchData(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((course, key) => (
          <CourseCard content={course} key={key} />
        ))}
      </div>
    </Container>
  );
};

export default EnrollCourse;
