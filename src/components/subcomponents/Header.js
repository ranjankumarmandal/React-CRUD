import React from 'react';

const Header = () => {
  const about = (e) => {
    alert('This application is made by Ranjan Kumar Mandal');
  };

  return (
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <h2>Contact Manager</h2>
      </div>
      <div className='last' onClick={about}>
        <a
          href='https://www.linkedin.com/in/ranjan-kumar-m-818367158/'
          target='_blank'
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
