import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './priceItem.scss';

function PriseItem({ name, cost, id }) {
  return (
    <li className="PriseItem__item">
      <Link to={`/services/${id}`}>
        <span className="PriseItem__text">
          {`${name} ${cost}`}
        </span>
      </Link>
    </li>
  );
}

PriseItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default PriseItem;
