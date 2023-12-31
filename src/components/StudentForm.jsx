export default function StudentForm({ addStudent }) {
  return (
    <div className="form-wrapper">
      <form className="attendance-form" onSubmit={addStudent}>
        <label htmlFor="name" className="form-item">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="form-item form-field"
        />
        <br />
        <label htmlFor="house" className="form-item">
          House
        </label>
        <br />
        <select name="house" id="house" className="form-item form-field">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Sort Me!">Sort Me!</option>
        </select>
        <br />
        <input
          type="submit"
          value={"Register me!"}
          className="form-item submit-btn"
        />
      </form>
    </div>
  );
}
