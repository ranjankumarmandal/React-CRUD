import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';

const AddContact = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setEmpty(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [empty]);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (title == '' || content == '') {
      setEmpty(true);
    } else {
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
    }
  };

  return (
    <div className='ui main'>
      {empty ? (
        <>
          <div className='ui red message'>Please Enter Name and Email both</div>
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
        </>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default AddContact;
