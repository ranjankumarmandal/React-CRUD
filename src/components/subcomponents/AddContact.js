import React, { useState } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';

const AddContact = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        'https://ranjan-json-server.herokuapp.com/posts',
        { v4, title, content }
      );
      console.log(response.data);
      setTitle('');
      setContent('');
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        <button className='ui button blue' onClick={handleSubmission}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
