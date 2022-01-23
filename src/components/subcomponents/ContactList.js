import React from 'react';
import ContactCard from './ContactCard';

const ContactList = () => {
  let contacts = [
    {
      id: '1',
      title: 'ranjan',
      content: 'ranjan45@gmail.com',
    },
    {
      id: '2',
      title: 'brad',
      content: 'brad@gmail.com',
    },
  ];

  return (
    <div className='ui celled list'>
      {contacts.map((contact) => (
        <ContactCard contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
