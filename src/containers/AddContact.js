import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import { Button } from '../components/index';

let AddContact = ({ dispatch }) => {
  let user = {};

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!user.name.value.trim() && !user.phone.value.trim() && !user.email.value.trim() ) {
          return;
        }
        dispatch(addContact(user.name.value, user.phone.value, user.email.value));
        user.name.value = '';
        user.phone.value = '';
        user.email.value = '';
      }}>
      <input ref={name => {
          user.name = name;
        }} />
        <br />
        <input ref={phone => {
            user.phone = phone;
          }} />
          <br />
          <input ref={email => {
              user.email = email;
            }} />
            <br />
        <Button label="Add Contact" type="submit" />
      </form>
    </div>
  );
};
AddContact = connect()(AddContact);

export default AddContact