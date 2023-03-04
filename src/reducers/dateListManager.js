import { createSlice } from "@reduxjs/toolkit";

const initialState = {initialDateArray: []};

export const dateSlice = createSlice({
  name: 'dateStore',
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.initialDateArray = [...state.initialDateArray, action.payload];
    },
    removeDate: (state, action) => {
      const locationToDelete = action.payload;
      state.initialDateArray = state.initialDateArray.filter((location) => locationToDelete !== location.id)
    }
  },
});

export const { addDate, removeDate } = dateSlice.actions