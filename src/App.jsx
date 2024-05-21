import { useState } from "react";
import StudentList from "./components/StudentList";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(students);

  return (
    <div>
      <h1>학생 목록</h1>
      <FilterButtons
        students={students}
        filteredStudents={filteredStudents}
        setFilteredStudents={setFilteredStudents}
      />
      <StudentList filteredStudents={filteredStudents} />
    </div>
  );
}
