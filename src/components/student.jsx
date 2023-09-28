export default function Student({ name, house, time }) {
  return (
    <div className="student-record">
      <div className="student-record-info">
        <div className={"student-record-house-badge"}>
          <img
            src={`../../public/images/${house}.png`}
            alt="House Badge"
            width={100}
            height={100}
          />
        </div>
        <h2 className="student-record-student-name">{name}</h2>
        <p>{house}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
