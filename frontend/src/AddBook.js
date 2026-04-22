import { useState } from 'react';
import axios from 'axios';

// ============================================================
// WHEN DEPLOYING: change this to your Render backend URL
// Example: const API = 'https://your-app.onrender.com/api/books';
// ============================================================
const API = 'http://localhost:5000/api/books';

export default function AddBook({ onAdd }) {
  const [title, setTitle]   = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear]     = useState('');
  const [genre, setGenre]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(API, {
        title,
        author,
        year: Number(year),
        genre
      });
      onAdd(res.data);
      setTitle('');
      setAuthor('');
      setYear('');
      setGenre('');
    } catch (err) {
      setError('Failed to add book. Check your backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Add a New Book</h2>
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Book title"
            required
          />
          <input
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Author name"
            required
          />
          <input
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="Publication year"
            type="number"
            min="1000"
            max="2099"
            required
          />
          <input
            value={genre}
            onChange={e => setGenre(e.target.value)}
            placeholder="Genre (e.g. Fiction)"
            required
          />
        </div>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? 'Adding...' : '+ Add Book'}
        </button>
      </form>
    </div>
  );
}
