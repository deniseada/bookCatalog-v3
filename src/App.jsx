import Books from "./book";
import "./index.css";
import data from "./data/books.json";
import AddBookForm from "./components/AddBookForm";
import Modal from "./components/Modal";

function renderBook(book, index) {
  return <Books {...book} key={index} />;
}

function App() {
  return (
    <div className="container">
      <h1>Book Catalog</h1>
      <div className="bookContainers">
        <Modal btnLabel="+" btnClassName="btn-plus">
          <AddBookForm />
        </Modal>
        <div className="books">{data.map(renderBook)}</div>
      </div>
      <footer> @ 2025 Denise Aquino</footer>
    </div>
  );
}

export default App;
