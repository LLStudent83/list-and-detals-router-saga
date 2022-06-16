import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setField as setFieldDetailsePrice, initialPrice }
  from '../../features/detailsePrice/detailsePriceSlice';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';

import './changePrice.scss';

export default function ChangePrice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(setFieldDetailsePrice({ loading: true, error: null, id: params.id }));
  }, [dispatch, params.id]);

  // eslint-disable-next-line max-len
  const { detailsPrice, loading, error } = useSelector((state) => (state.detailsPriceReducer));

  let name = '';
  let price = null;
  let content = '';

  if (detailsPrice !== null) {
    name = detailsPrice.name;
    price = detailsPrice.price;
    content = detailsPrice.content;
  }

  const hendelClickCancel = () => {
    navigate('/services');
    dispatch(setFieldDetailsePrice({ loading: false, error: null, detailsPrice: initialPrice }));
  };

  const loader = loading ? <Loader /> : null;
  const popup = error !== null ? <Popup text={error} /> : null;

  return (
    <>
      {loader}
      {popup}
      <div className="ChangePrice__wrapper">
        <label htmlFor="name">
          Название
          <input
            type="text"
            id="name"
            value={name}
            readOnly
          />
        </label>
        <label htmlFor="cost">
          Стоимость
          <input
            type="text"
            id="cost"
            value={price}
            readOnly
          />
        </label>
        <label htmlFor="description">
          Описание
          <input
            type="text"
            id="description"
            value={content}
            readOnly
          />
        </label>
        <footer className="ChangePrice__futer">
          <Button
            className="cancel"
            nameButon="Отмена"
            typeButton="button"
            action={hendelClickCancel}
          />
        </footer>
      </div>
    </>
  );
}
