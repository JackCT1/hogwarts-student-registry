export default function StudentForm() {
  return (
    <div className="form-wrapper">
      <form className="attendance-form">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" />
      </form>
    </div>
  );
}
