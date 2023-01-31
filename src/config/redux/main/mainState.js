import { createSlice } from '@reduxjs/toolkit';

export const mainState = createSlice({
  name: 'main',
  initialState: {
    value: 'hellooo hahhahaasdasd',
    idDetailMenu: 0,
    charts: [],
    totalPrice: 0,
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    inputIdDetailMenu: (state, action) => {
      state.idDetailMenu = Number(action.payload);
    },
    clearIdDetailMenu: (state) => {
      state.idDetailMenu = 0;
    },
    addToCharts: (state, action) => {
      let { id, name, harga, qty, note } = action.payload;
      if (state.charts.filter((chart) => chart.id === id).length !== 0) {
        let collection = {
          id: id,
          name: name,
          harga: harga,
          qty: qty,
          note: note,
          totalHarga: qty * harga,
        };
        let others = state.charts.filter((chart) => chart.id !== id);
        state.charts = [...others, collection];
      } else {
        let collection = {
          id: id,
          name: name,
          harga: harga,
          qty: qty,
          note: note,
          totalHarga: qty * harga,
        };
        state.charts = [...state.charts, collection];
      }

      let collection = state.charts.map((item) => {
        return item.totalHarga;
      });
      state.totalPrice = collection.reduce((past, then) => past + then);
    },
    deleteChart: (state, action) => {
      const id = action.payload;
      let collection = state.charts.filter((chart) => chart.id !== id);
      state.charts = collection;

      if (collection.length !== 0) {
        let collection2 = state.charts.map((item) => {
          return item.totalHarga;
        });
        state.totalPrice = collection2.reduce((past, then) => past + then);
      }
    },
  },
});

export const {
  changeValue,
  inputIdDetailMenu,
  clearIdDetailMenu,
  addToCharts,
  deleteChart,
} = mainState.actions;

export const getMainStateAll = (state) => state.main;

export default mainState.reducer;
