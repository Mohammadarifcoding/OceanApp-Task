import CourseCard from "@/Components/Shared/Cards/CourseCard";
import Container from "@/Components/Shared/Container/Container";
import Title from "@/Components/Shared/Text/Title";
import { CourseData } from "@/lib/Data/CourseData";



const EnrollCourse = () => {
    return (
        <Container>
            <Title text="Enroll into our course"/>
             <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-5">
                {CourseData.map((course,key)=>(
                    <CourseCard content={course} key={key}/>
                ))} 

             </div>
        </Container>
    );
};

export default EnrollCourse;