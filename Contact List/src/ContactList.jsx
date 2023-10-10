import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from './contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = (id) => {
    const updatedContact = {
      id,
      name: updatedName,
      phone: updatedPhone,
    };
    dispatch(updateContact(updatedContact));
    setEditingId(null);
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {editingId === contact.id ? (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                value={updatedPhone}
                onChange={(e) => setUpdatedPhone(e.target.value)}
              />
              <button onClick={() => handleUpdate(contact.id)}>Save</button>
            </div>
          ) : (
            <div>
              {contact.name} - {contact.phone}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
              <button onClick={() => setEditingId(contact.id)}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
