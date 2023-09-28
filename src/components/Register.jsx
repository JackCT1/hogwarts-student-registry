import Student from "./Student";

export default function Register({ students }) {
  return (
    <div className="register-wrapper">
      <h1 id="register-component-header">Register</h1>
      <div className="register-list">
        {students.map((student) => {
          return <Student key={student.id} {...student} />;
        })}
      </div>
    </div>
  );
}
