import Student from "./Student";

export default function Register({ students }) {
  return (
    <div className="register-wrapper">
      <div className="component-title" id="register-component-header">
        <h2>Register</h2>
      </div>
      <div className="register-list">
        {students.map((student) => {
          return <Student key={student.id} {...student} />;
        })}
      </div>
    </div>
  );
}
