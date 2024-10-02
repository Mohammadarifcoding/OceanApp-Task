import { Link } from "react-router-dom";
import Button from "../Button/Button";

const TeachersCoursesCard = ({ content, btn1, btn2 }) => {
    const { image, course, category } = content;
    return (
        <div className='flex flex-col md:flex-row justify-center rounded-lg items-center gap-5 bg-white max-w-[400px] md:max-w-5xl  drop-shadow-md'>
            <div className='flex justify-center items-center '>
                <img src={image} className="h-52 md:h-64 w-full md:max-w-[350px] rounded-l-lg "
                    alt="" />
            </div>
            <div className='py-3 space-y-3 px-3 md:pr-10'>
                <p className=' font-semibold'>{course}</p>
                <p className='text-grayDefault'>{category}</p>
                {/* buttons */}
                <div className='flex items-center justify-start gap-3 '>
                    <Link to="/dashboard/teacher/my-courses/update-courses">
                        <Button className="md:text-sm text-white px-2 md:px-3">{btn1}</Button></Link>
                    <Link to="/dashboard/teacher/my-courses/update-curriculum">
                        <Button className="hover:bg-primary hover:text-white bg-transparent text-primary px-2 md:px-3 md:text-sm">{btn2}</Button></Link>

                </div>
            </div>

        </div>
    );
};

export default TeachersCoursesCard;