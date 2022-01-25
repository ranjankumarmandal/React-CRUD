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

  const handleEdit = (id) => {
    console.log('edit button clicked');
    let person = prompt('Please enter your name:', '');
    let email = prompt('Please enter your email:', '');
    console.log(person, email);
    try {
      axios.put(`https://ranjan-json-server.herokuapp.com/posts/${id}`, {
        id,
        title: person,
        content: email,
      });
    } catch (error) {
      console.log('something went wrong while updating');
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
