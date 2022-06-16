import { createSlice } from '@reduxjs/toolkit';

export const initialPrice = {
  id: null,
  name: '',
  price: null,
  content: '',
};

const initialState = {
  detailsPrice: initialPrice,
  loading: false,
  error: '',
};

export const detailsPriceSlice = createSlice({
  name: 'detailsPrice',
  initialState,
  reducers: {
    setField: (state, { payload }) => {
      const keys = Object.keys(payload);
      const values = Object.values(payload);
      for (let i = 0; i <= keys.length - 1; i += 1) {
        state[keys[i]] = values[i];
      }
    },

    // progressRequestDet: (state) => {
    //   state.loading = true;
    //   state.error = '';
    // },

    // searchFailureDet: (state, action) => {
    //   const { message } = action.payload;
    //   state.error = message;
    //   state.loading = false;
    // },

    // searchSuccessDet: (state, action) => {
    //   const { detailsPrice } = action.payload;
    //   state.detailsPrice = detailsPrice;
    //   state.loading = false;
    //   state.error = '';
    // },
  },
});

export const { setField } = detailsPriceSlice.actions;

export default detailsPriceSlice.reducer;
