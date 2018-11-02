import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ text, onClick }) => (
  <div onClick = {(event) => onClick(event)} >
    {text}
  </div>
);

Icon.propTypes = {
  text: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default Icon;