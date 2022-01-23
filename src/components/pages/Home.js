import React, { Fragment } from 'react';
import Header from '../subcomponents/Header';
import AddContact from '../subcomponents/AddContact';
import ContactList from '../subcomponents/ContactList';

const Home = () => {
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
