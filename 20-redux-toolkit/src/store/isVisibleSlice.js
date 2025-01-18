// ** 실습 **
import { createSlice } from '@reduxjs/toolkit';

const isVisibleSlice = createSlice({
  name: 'isVisible',
  initialState: true,
  reducers: {
    change: (state) => {
      return !state;
    },
  },
});

export const { change } = isVisibleSlice.actions;
export default isVisibleSlice.reducer;
