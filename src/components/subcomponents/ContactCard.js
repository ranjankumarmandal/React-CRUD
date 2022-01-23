import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>{contact.title}</div>
        <div>{contact.content}</div>
      </div>
      <i className='trash alternate outline icon' style={{ color: 'red' }}></i>
    </div>
  );
};

export default ContactCard;
