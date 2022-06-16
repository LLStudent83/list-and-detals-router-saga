import * as React from 'react';
import { useSelector } from 'react-redux';
import PriseItem from '../priceItem/PriceItem';
import './priceList.scss';

export default function PriceList() {
  const prices = useSelector((store) => store.pricesSliceReducer.prices);

  return (
    <ul className="PriceList__list">
      {prices.map((prise) => (
        <PriseItem
          key={prise.id}
          id={prise.id}
          name={prise.name}
          cost={prise.price}
        />
      ))}
    </ul>
  );
}
