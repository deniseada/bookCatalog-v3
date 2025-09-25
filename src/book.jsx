function ChangeBookColorClick(e) {
  e.currentTarget.classList.toggle("book-bg");
}

function deleteBook(e) {
  e.currentTarget.parentElement.remove();
}

function Books({ price, image, url }) {
  return (
    <div className="book " onClick={ChangeBookColorClick}>
      <button className="delete-book" onClick={deleteBook}>
        Remove
      </button>
      <img className="book-image" src={image} />
      <div className="book-info">
        <p className="book-price">{price}</p>
        <a
          className="book-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Books;
