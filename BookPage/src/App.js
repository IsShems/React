// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookDetailsPage from './components/BookDetailsPage';
import Navigation from './components/Navigation';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:bookId" element={<BookDetailsPage />} />
        <Route path="/about" element={<div><p>Здесь вы можете найти информацию о некоторых книгах:</p><p>Для этого перейдите на страницу "Home"</p></div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
