import { facultyData } from "@/lib/Data/FacultyData";

import { useState } from "react";
import FacultyTable from "./FacultyTable";
import Container from "@/Components/Shared/Container/Container";

const FacultyOverview = () => {

  const [data,setData] = useState([...facultyData])
  const SearchData = (search)=>{
    if(!search){
      setData([...facultyData])
    }
    const filteredFaculty = facultyData.filter(
      (faculty) =>
        faculty.name.toLowerCase().includes(search.toLowerCase()) ||
        faculty.subject.toLowerCase().includes(search.toLowerCase()),
    );
    setData([...filteredFaculty])
  }
  return (
    <Container >
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold">Faculty Overview</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search faculty..."
            className="rounded-md border focus:outline-none px-3 py-2"
            onChange={(e) => SearchData(e.target.value)}
          />
        </div>
      </div>
      <FacultyTable facultyData={data}/>
    </Container>
  );
};

export default FacultyOverview;
