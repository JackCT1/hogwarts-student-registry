export default function Student({ name, house, time, isLate }) {
  return (
    <div className="student-record">
      <div className="student-record-info">
        <div className="student-record-house-badge">
          <img
            src={`/images/${house}.png`}
            alt="House Badge"
            width={100}
            height={100}
          />
        </div>
        <div className="student-record-class-info">
          <h2 className="student-record-student-name">{name}</h2>
          <h3>Entered class at</h3>
          <h3>{time}</h3>
        </div>
      </div>
    </div>
  );
}
