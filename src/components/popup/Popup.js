import * as React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';

import { setField as setFieldDetailsePrice } from '../../features/detailsePrice/detailsePriceSlice';

import { setField as setFieldPrices } from '../../features/prices/pricesSlice';
import './popup.scss';

function Popup({ text }) {
  const params = useParams();
  const dispatch = useDispatch();
  const repeatedRequest = () => {
    if (params.id) {
      dispatch(setFieldDetailsePrice({ loading: true, error: null, id: params.id }));
      return;
    }
    dispatch(setFieldPrices({ loading: true, error: null }));
  };
  return (
    <div className="Popup__wrapper">
      <p className="Popup__main">
        {text}
      </p>
      <Button
        className="blackButton"
        action={repeatedRequest}
        nameButon="Повторить запрос"
        typeButton="button"
      />
    </div>
  );
}

Popup.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Popup;
