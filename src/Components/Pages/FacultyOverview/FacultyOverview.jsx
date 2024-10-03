import { facultyData } from "@/lib/Data/FacultyData";
import { Search } from "lucide-react";
import { useState } from "react";
import FacultyTable from "./FacultyTable";
import Container from "@/Components/Shared/Container/Container";

const FacultyOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaculty = facultyData.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <Container >
        {/* Faculty Overview */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold">Faculty Overview</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search faculty..."
            className="rounded-md border px-3 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="rounded-md bg-blue-500 p-2 text-white">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      {/* Faculty Table */}
      <FacultyTable facultyData={facultyData}/>
    </Container>
  );
};

export default FacultyOverview;
