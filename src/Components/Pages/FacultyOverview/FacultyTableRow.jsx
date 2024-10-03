import Button from "@/Components/Shared/Button/Button";
import TableData from "@/Components/Shared/Table/TableData";
import { Award, Book, Mail, Phone, Users, X } from "lucide-react";
import { useState } from "react";

const FacultyTableRow = ({ faculty }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <>
      <tr>
        <TableData>{faculty.name}</TableData>
        <TableData>{faculty.designation}</TableData>
        <TableData>{faculty.subject}</TableData>
        <TableData>
          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            {faculty.students}
          </span>
        </TableData>
        <TableData className={"flex justify-center"}>
          <Button onClick={() => setOpenModal(true)} className="text-white">
            View
          </Button>
        </TableData>
      </tr>
      <FacultyModal faculty={faculty} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default FacultyTableRow;

const FacultyModal = ({ faculty, openModal, setOpenModal }) => {
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${openModal ? "opacity-1 visible" : "invisible opacity-0"} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full max-w-md rounded-lg bg-white shadow-xl"
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-bold">{faculty.name}</h2>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4 p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-500" />
              <span>
                {faculty.designation} - {faculty.subject}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-500" />
              <span>{faculty.students} students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-red-500" />
              <a
                href={`mailto:${faculty.email}`}
                className="text-blue-600 hover:underline"
              >
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-purple-500" />
              <a
                href={`tel:${faculty.phone}`}
                className="text-blue-600 hover:underline"
              >
                {faculty.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Book className="h-5 w-5 text-yellow-500" />
              <span>{faculty.publications} publications</span>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Office Hours:</h3>
              <p>{faculty.officeHours}</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Courses:</h3>
              <ul className="list-inside list-disc">
                {faculty.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
