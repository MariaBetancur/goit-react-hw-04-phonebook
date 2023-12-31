import React from 'react';

const Filter = ({ setFiltering, Filtering }) => {
  return (
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={Filtering}
      onChange={e => setFiltering(e.target.value)}
    />
  );
};

export default Filter;
