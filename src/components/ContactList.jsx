import React from 'react';
import { useEffect } from 'react';

const ContactList = ({ setContacts, Contacts, Filtering }) => {
  let filteredContactos = '';

  useEffect(() => {
    let contactsFromLocal = localStorage.getItem('myContacts');
    if (JSON.parse(contactsFromLocal) !== Contacts) {
      localStorage.setItem('myContacts', JSON.stringify(Contacts));
    }
  }, [Contacts]);

  if (Filtering) {
    filteredContactos = Contacts.filter(contacto => {
      return contacto.nombre.toLowerCase().includes(Filtering.toLowerCase()); //para cuando no ingresamos ningun filtro, contacto.nombre incluye cualquier letra, si
    });
    console.log('entro a Filtering if:');
  } else {
    filteredContactos = Contacts;
    console.log('filteredContactos es:', filteredContactos);
  }

  const deleteContact = index => {
    console.log('index', index);
    const newContacts = Contacts;
    newContacts.splice(index, 1);

    filteredContactos = newContacts;
    setContacts(newContacts);
  };

  return (
    <>
      {Filtering !== ''
        ? filteredContactos.map((contacto, index) => (
            <li key={index}>
              {console.log('Primera condicion')}
              {console.log('Filterin', typeof Filtering)}
              {contacto.nombre} - {contacto.numero}
              <button
                onClick={() => {
                  deleteContact(index);
                }}
              >
                Delete
              </button>
            </li>
          ))
        : Contacts.map((contacto, index) => (
            <li key={index}>
              {console.log('Segunda condicion')}
              {contacto.nombre} - {contacto.numero}
              <button onClick={() => deleteContact(index)}>Delete</button>
            </li>
          ))}
    </>
  );
};

export default ContactList;
