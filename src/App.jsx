import { useState } from "react";
import "./App.css";
import { hogwartsStudentRegistry } from "./data";
import Student from "./components/student";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState(hogwartsStudentRegistry);
  const studentComponents = [];
  {
    students.forEach((student) => {
      studentComponents.push(
        <Student
          name={student.name}
          house={student.house}
          time={student.time}
        />
      );
    });
  }

  const addStudent = (event) => {
    event.preventDefault();
    let newStudent = {
      id: students.length + 1,
      name: event.target.name.value,
      house: event.target.house.value,
      time: new Date().toUTCString(),
      isLate: false,
    };
    setStudents([...students, newStudent]);
    console.log(students);
    console.log(event.target.name.value);
    return students;
  };

  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">
          <div className="form-wrapper">
            <StudentForm addStudent={addStudent} />
          </div>
        </div>
        <div className="app-rhs-container">
          <div className="register-wrapper">
            <h1 id="register-component-header">Register</h1>
            <div className="register-list">{studentComponents}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
