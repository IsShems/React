import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newContact = { id: Date.now(), name, phone };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
