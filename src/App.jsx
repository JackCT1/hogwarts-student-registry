import { useState } from "react";
import "./App.css";
import { hogwartsStudentRegistry } from "./data";
import StudentForm from "./components/StudentForm";
import Register from "./components/Register";

function App() {
  const [students, setStudents] = useState(hogwartsStudentRegistry);
  const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

  const addStudent = (event) => {
    event.preventDefault();
    let newStudent = {
      id: students.length + 1,
      name: event.target.name.value,
      house: event.target.house.value,
      time: new Date().toUTCString(),
      isLate: false,
    };

    if (newStudent.house === "Sort Me!") {
      newStudent.house = houses[Math.floor(Math.random() * houses.length)];
    }
    setStudents([newStudent, ...students]);
    console.log(students);
    console.log(event.target.house.value);
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
