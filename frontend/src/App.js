import { useEffect, useState } from 'react';
import axios from 'axios';
import AddBook from './AddBook';
import BookList from './BookList';

// ============================================================
// WHEN DEPLOYING: change this to your Render backend URL
// ============================================================
const API = 'http://localhost:5000/api/books';

export default function App() {
  const [books, setBooks]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    axios.get(API)
      .then(res => setBooks(res.data))
      .catch(() => setError('Could not connect to backend. Is it running?'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <h1>📚 Book Manager</h1>
        <p>Your personal MERN stack book collection</p>
      </div>

      <AddBook onAdd={book => setBooks([book, ...books])} />

      {error && <div className="error-msg">{error}</div>}
      {loading ? (
        <div className="loading">Loading books...</div>
      ) : (
        <BookList books={books} setBooks={setBooks} />
      )}
    </div>
  );
}
