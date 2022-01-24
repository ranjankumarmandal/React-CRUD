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

  return (
    <div className='ui celled list'>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
