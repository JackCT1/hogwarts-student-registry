export default function StudentForm({ addStudent }) {
  return (
    <div className="form-wrapper">
      <form className="attendance-form" onSubmit={addStudent}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" className="form-field" />
        <br />
        <label htmlFor="house">House</label>
        <br />
        <input type="text" id="house" name="house" className="form-field" />
        <br />
        <input type="submit" value={"Register me!"} className="submit-btn" />
      </form>
    </div>
  );
}
