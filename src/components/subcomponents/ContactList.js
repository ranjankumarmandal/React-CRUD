import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    try {
      let response = await axios.get(
        'https://ranjan-json-server.herokuapp.com/posts'
      );
      setContacts(response.data);
      console.log('Content Loaded');
    } catch (error) {
      console.log('Something went wrong');
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://ranjan-json-server.herokuapp.com/posts/${id}`
      );
      const newContact = contacts.filter((contact) => id !== contact.id);
      setContacts(newContact);
    } catch (error) {
      console.log('something went wrong while deleting');
    }
  };

  return (
    <div className='ui celled list'>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
