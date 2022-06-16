import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: [],
  loading: false,
  error: null,
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setField: (state, { payload }) => {
      const keys = Object.keys(payload);
      const values = Object.values(payload);
      for (let i = 0; i <= keys.length - 1; i += 1) {
        state[keys[i]] = values[i];
      }
    },

    // progressRequest: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },

    // searchFailure: (state, action) => {
    //   const { message } = action.payload;
    //   state.error = message;
    //   state.loading = false;
    // },

    // searchSuccess: (state, action) => {
    //   const { prices } = action.payload;
    //   state.prices = prices;
    //   state.error = null;
    //   state.loading = false;
    // },
  },
});

export const {
  setField,
} = pricesSlice.actions;

export default pricesSlice.reducer;
