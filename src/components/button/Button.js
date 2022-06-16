import * as React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({
  className, action,
  nameButon, typeButton,
}) {
  return (
    <button
      className={`button ${className}`}
      type={typeButton}
      onClick={action}
    >
      {nameButon}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  nameButon: PropTypes.string.isRequired,
  typeButton: PropTypes.string.isRequired,
};

export default Button;
