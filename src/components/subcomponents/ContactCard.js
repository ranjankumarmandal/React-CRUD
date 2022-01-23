import React from 'react';
import user from '../../images/user.png';

const ContactCard = ({ contact }) => {
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
      ></i>
    </div>
  );
};

export default ContactCard;
