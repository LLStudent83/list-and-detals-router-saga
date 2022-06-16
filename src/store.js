import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import pricesSliceReducer from './features/prices/pricesSlice';
import detailsPriceReducer from './features/detailsePrice/detailsePriceSlice';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pricesSliceReducer,
    detailsPriceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
