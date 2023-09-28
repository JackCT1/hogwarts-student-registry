import { useState } from "react";
import "./App.css";
import { hogwartsStudentRegistry } from "./data";
import StudentForm from "./components/StudentForm";
import Register from "./components/Register";

function App() {
  const [students, setStudents] = useState(hogwartsStudentRegistry);

  const addStudent = (event) => {
    event.preventDefault();
    let newStudent = {
      id: students.length + 1,
      name: event.target.name.value,
      house: event.target.house.value,
      time: new Date().toUTCString(),
      isLate: false,
    };
    setStudents([newStudent, ...students]);
    console.log(students);
    console.log(event.target.name.value);
    return students;
  };

  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">
          <StudentForm addStudent={addStudent} />
        </div>
        <div className="app-rhs-container">
          <Register students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
