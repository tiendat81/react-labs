import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment(state) {
//       return state + 1;
//       // trong truong hop state la number, string, boolean thi phai return, neu khong return thi se return undefined. con obj or arr thi khong can return
// neu muon return thi phai clone state hien tai no ra
//     },
//     decrement(state) {
//       return state - 1;
//     },
//   },
// });

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // action creator
export default counterSlice.reducer; // reducer

// default export: reducer
// name exports: action creator
