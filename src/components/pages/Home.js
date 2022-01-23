import React, { Fragment } from 'react';
import Header from '../subcomponents/Header';
import AddContact from '../subcomponents/AddContact';
import ContactList from '../subcomponents/ContactList';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <AddContact />
      <ContactList />
    </Fragment>
  );
};

export default Home;
