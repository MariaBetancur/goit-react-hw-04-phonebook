import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({
  Name,
  Number,
  setName,
  setNumber,
  setContacts,
  Contacts,
}) => {
  const addUser = () => {
    const nuevoContacto = {
      nombre: Name,
      id: nanoid(),
      numero: Number,
    };

    setContacts([...Contacts, nuevoContacto]);
    setName('');
    setNumber('');
    console.log('nombre', nuevoContacto.nombre);
    console.log('Name', Name);
  };

  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('se envio el form');
          addUser({ Name, Number });

          let contactsFromLocal = localStorage.getItem('myContacts');
          if (JSON.parse(contactsFromLocal) !== Contacts) {
            localStorage.setItem('myContacts', JSON.stringify(Contacts));
          }
          console.log('contactsFromLocal', contactsFromLocal);
          console.log('contacts', Contacts);
        }}
      >
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={Number}
          onChange={e => setNumber(e.target.value)}
        />
        <button type="submit">Add contact</button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
