export default function Student({ name, house, time }) {
  return (
    <div className="student-record">
      <h2 className="student-record-student-name">{name}</h2>
      <p>{house}</p>
      <p>{time}</p>
    </div>
  );
}
