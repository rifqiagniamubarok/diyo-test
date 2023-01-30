import { createSlice } from '@reduxjs/toolkit';

export const mainState = createSlice({
  name: 'main',
  initialState: {
    value: 'hellooo hahhahaasdasd',
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = mainState.actions;

export const getMainStateAll = (state) => state.main;

export default mainState.reducer;
