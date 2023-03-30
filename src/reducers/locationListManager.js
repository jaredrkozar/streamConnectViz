import { createSlice } from "@reduxjs/toolkit";

const initialState = {initialArray: [], mapArray: []};

export const locationSlice = createSlice({
  name: 'locationStore',
  initialState,
  reducers: {
    addSelectedLocation: (state, action) => {
      state.initialArray = [...state.initialArray, action.payload];
    },
    removeSelectedLocation: (state, action) => {
      const locationToDelete = action.payload;
      state.initialArray = state.initialArray.filter((location) => locationToDelete !== location.id)
    },
    addMapLocation: (state, action) => {
      state.mapArray = action.payload;
    }
  },
});

export const { addSelectedLocation, removeSelectedLocation,addMapLocation } = locationSlice.actions