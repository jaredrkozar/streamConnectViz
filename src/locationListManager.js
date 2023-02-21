import { createSlice } from "@reduxjs/toolkit";

const initialState = {initialArray: []};

export const locationSlice = createSlice({
  name: 'locationStore',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.initialArray = [...state.initialArray, action.payload];
    },
    removeItem: (state, action) => {
      const locationToDelete = action.payload;
      state.initialArray = state.initialArray.filter((location) => locationToDelete !== location.id)
    }
  },
});

export const { addLocation, removeItem } = locationSlice.actions