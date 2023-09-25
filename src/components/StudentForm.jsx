export default function StudentForm() {
  return (
    <div className="form-wrapper">
      <form className="attendance-form">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" className="form-field" />
        <label htmlFor="house">House</label>
        <br />
        <input type="text" id="house" name="house" className="form-field" />
        <input type="submit" value={"Register me!"} className="submit-btn" />
      </form>
    </div>
  );
}
