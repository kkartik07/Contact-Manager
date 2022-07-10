import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactDetail from './components/ContactDetail';

function App() {
  const [id, setId] = useState(0);
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setId(id + 1);
    setContacts([...contacts, { id: id, ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const editContactHandler = ({ name, email, phno, id }) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    setContacts([...contacts, { id, name, email, phno }]);
    return;
  }

  useEffect(() => {
    const retrievedContacts = localStorage.getItem('contacts');
    if (retrievedContacts !== []) setContacts(JSON.parse(retrievedContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route exact path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route exact path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route exact path="/edit" element={<EditContact editContactHandler={editContactHandler} />} />
          <Route exact path="/contact/:id" element={<ContactDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
