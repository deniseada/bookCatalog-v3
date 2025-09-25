function AddBookForm() {
  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form>
        <div className="form-control">
          <label>Title:</label>
          <input type="text" placeholder="Book Title.." />
        </div>
        <div className="form-control">
          <label>Author:</label>
          <input type="text" placeholder="Author.." />
        </div>
        <div className="form-control">
          <label>Publisher:</label>
          <input type="text" placeholder="Publisher.." />
        </div>
        <div className="form-control">
          <label> Publication Year:</label>
          <input type="number" />
        </div>
        <div className="form-control">
          <label>Language:</label>
          <input type="text" placeholder="Language.." />
        </div>
        <div className="form-control">
          <label>Pages:</label>
          <input type="number" />
        </div>
        <button className="btn-save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
