import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Container, Container2 } from './components/Styled/Container.styled';
import PropTypes from 'prop-types';

const Form = () => {
  const [Contacts, setContacts] = useState([
    { id: 'id-1', nombre: 'Rosie Simpson', numero: '459-12-56' },
    { id: 'id-2', nombre: 'Hermione Kline', numero: '443-89-12' },
    { id: 'id-3', nombre: 'Eden Clements', numero: '645-17-79' },
    { id: 'id-4', nombre: 'Annie Copeland', numero: '227-91-26' },
  ]);
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [Filtering, setFiltering] = useState('');

  useEffect(() => {
    if (Contacts.length > 0) {
      localStorage.setItem('myContacts', JSON.stringify(Contacts));
    }
  }, [Contacts]);

  useEffect(() => {
    console.log('useEffectDidMount pendiente por agregar');
  }, []); // Coloca un arreglo vacío para que se ejecute solo en el montaje del componente

  return (
    <Container>
      <Container2>
        <h1>Phonebook</h1>
        <ContactForm
          Name={Name}
          Number={Number}
          setName={setName}
          setNumber={setNumber}
          setContacts={setContacts}
          Contacts={Contacts}
        />
        <h1>Contacts</h1>
        <Filter Filtering={Filtering} setFiltering={setFiltering} />
        <ContactList
          setContacts={setContacts}
          Contacts={Contacts}
          Filtering={Filtering}
          setName={setName}
        />
      </Container2>
    </Container>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default Form;
