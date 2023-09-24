import { useState } from "react";
import "./App.css";
import { hogwartsStudentRegistry } from "./data";
import Student from "./components/student";

function App() {
  const studentComponents = [];
  {
    hogwartsStudentRegistry.forEach((student) => {
      studentComponents.push(
        <Student
          name={student.name}
          house={student.house}
          time={student.time}
        />
      );
    });
  }
  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container"></div>
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
