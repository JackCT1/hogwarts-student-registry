export default function Student({ name, house, time }) {
  return (
    <div className="student-record">
      <span>{name}</span>
      <p>{house}</p>
      <p>{time}</p>
    </div>
  );
}
