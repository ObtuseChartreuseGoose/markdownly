import React from 'react';
import PropTypes from 'prop-types';

function AddTabButton({ handleClick }) {
  return (
    <button name="addTab" onClick={handleClick}>+</button>
  );
}

AddTabButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddTabButton;
