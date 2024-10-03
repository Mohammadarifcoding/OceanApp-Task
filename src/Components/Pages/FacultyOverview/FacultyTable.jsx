

import FacultyTableRow from "./FacultyTableRow";

const FacultyTable = ({facultyData}) => {
    return (
       <div className="overflow-x-auto ">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
          {facultyData.map((faculty,idx) => (
            <FacultyTableRow faculty={faculty} key={idx}/>
          ))}

          </tbody>
           
        </table>
      </div>
    );
};

export default FacultyTable;