// BookInfo.jsx
import React from "react";
import BookData from "./data";

function BookInfo() {
  return (
    <div>
        <h1>Title:{BookData.title}</h1>
        <p>Author: {BookData.author}</p>
        <p>Genre: {BookData.genre}</p>
        <p>Pages: {BookData.pages}</p>
        <h2>Reviews:</h2>
        <ul>
          {BookData.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
  );
}

export default BookInfo;
