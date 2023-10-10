import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;

