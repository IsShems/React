import React from 'react';
import { Link } from 'react-router-dom';
import { BookData } from './BookDetailsPage'; 

function HomePage() {
  return (
    <div>
      <h2>Список книг</h2>
      <ul>
        {BookData.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.name}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
