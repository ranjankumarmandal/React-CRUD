import React from 'react';
import user from '../../images/user.png';

const ContactCard = ({ contact, handleDelete }) => {
  return (
    <div className='item'>
      <img src={user} alt='user' className='ui avatar image' />
      <div className='content'>
        <div className='header'>{contact.title}</div>
        <div>{contact.content}</div>
      </div>
      <i
        className='trash alternate outline icon'
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => handleDelete(contact.id)}
      ></i>

      <i
        className='edit alternate outline icon'
        style={{ color: 'blue', marginTop: '7px', marginRight: '10px' }}
        onClick={() => handleEdit(contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
