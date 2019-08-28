import React from 'react';
import PropTypes from 'prop-types';

function Tab({ title, id }) {
  return (
    <section>
      <button>{title}</button>
      <button>X{id}</button>
    </section>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Tab;
