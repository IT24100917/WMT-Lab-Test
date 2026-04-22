import axios from 'axios';

// ============================================================
// WHEN DEPLOYING: change this to your Render backend URL
// ============================================================
const API = 'http://localhost:5000/api/books';

export default function BookList({ books, setBooks }) {
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this book?')) return;
    try {
      await axios.delete(`${API}/${id}`);
      setBooks(books.filter(b => b._id !== id));
    } catch (err) {
      alert('Failed to delete book.');
    }
  };

  if (books.length === 0) {
    return (
      <div className="empty-state">
        <p>📚</p>
        <p>No books yet. Add your first one above!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="books-header">
        <h2>All Books</h2>
        <span className="book-count">{books.length} book{books.length !== 1 ? 's' : ''}</span>
      </div>

      {books.map(book => (
        <div key={book._id} className="book-card">
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <div className="book-meta">
              <span className="badge">{book.year}</span>
              {book.genre && (
                <span className="badge badge-genre">{book.genre}</span>
              )}
            </div>
          </div>
          <button
            className="btn-delete"
            onClick={() => handleDelete(book._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
