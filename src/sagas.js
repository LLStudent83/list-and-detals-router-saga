import {
  call, put, spawn, takeEvery,
} from 'redux-saga/effects';
import { setField as setFieldDetailsePrice, initialPrice }
  from './features/detailsePrice/detailsePriceSlice';
import { setField as setFieldPricesSlice } from './features/prices/pricesSlice';

import searchPrices from './api/index';

//--------------------------------------------------------------------
// обработка запроса на загрузку отдельной работы

function* watchFetchDetailsePriceSaga() {
  yield takeEvery(({ type, payload }) => type === 'detailsPrice/setField'
      && payload.loading === true, workFetchDetailsePriceSaga);
}

function* workFetchDetailsePriceSaga({ payload }) {
  try {
    const prise = yield call(searchPrices, payload.id);
    yield put(setFieldDetailsePrice({ loading: false, error: null, detailsPrice: prise }));
  } catch (e) {
    yield put(setFieldDetailsePrice({ loading: false, error: (e.message) }));
  }
}

//----------------------------------------------------------------------
// обработка запроса на загрузку всего списка работ
// function filterwatchFetchPrices({ type, payload }) {
//   return type === 'prices/setField' && payload.loading === true;
// }

function* watchFetchPricesSaga() {
  // eslint-disable-next-line arrow-body-style
  yield takeEvery(({ type, payload }) => {
    return type === 'prices/setField' && payload.loading === true;
  }, workFetchPricesSaga);
}

function* workFetchPricesSaga() {
  try {
    const data = yield call(searchPrices);
    yield put(setFieldPricesSlice({ loading: false, error: null, prices: data }));
  } catch (e) {
    yield put(setFieldPricesSlice({ loading: false, error: (e.message) }));
  } finally {
    // очищаем поля конкретной работы в случае перезагрузки
    yield put(setFieldDetailsePrice({ detailsPrice: initialPrice }));
  }
}

function* saga() {
  yield spawn(watchFetchPricesSaga);
  yield spawn(watchFetchDetailsePriceSaga);
}

export default saga;
