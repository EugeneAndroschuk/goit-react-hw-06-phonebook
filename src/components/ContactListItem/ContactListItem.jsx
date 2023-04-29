import React from 'react';
import PropTypes from 'prop-types'
import css from './ContactListItem.module.css';

const ContactListItem = (props) => {
    const { contact, onDeleteContact } = props;
  return (
    <>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
