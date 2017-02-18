import React, { PropTypes } from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts , onToggleFavorite }) => (
  <ul>
    {contacts.map(contact =>
      <ContactCard
        key={contact.id}
        {...contact}
        onToggleFavorite={onToggleFavorite}
      />
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ContactList;
