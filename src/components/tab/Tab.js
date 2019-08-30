import React from 'react';
import PropTypes from 'prop-types';

function Tab({ title, id, handleClick }) {
  return (
    <section>
      <button name="loadTab" onClick={event => handleClick(event, id)}>{title}</button>
      {id === 'Default' ? null :  <button name="deleteTab" onClick={event => handleClick(event, id)}>X</button>}
    </section>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tab;
