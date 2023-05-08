import { createSlice } from "@reduxjs/toolkit";

const initialState = {initialArray: [], mapArray: []};

export const locationSlice = createSlice({
  name: 'locationStore',
  initialState,
  reducers: {
    addSelectedLocation: (state, action) => {
      console.log("ADDED PAYLOAD" + action.payload)
      state.initialArray = [...state.initialArray, action.payload];
    },
    removeSelectedLocation: (state, action) => {
      const locationToDelete = action.payload;
      state.initialArray = state.initialArray.filter(location => (location.id != locationToDelete.id) && (location.date != locationToDelete.date))
    },
    addMapLocation: (state, action) => {
      state.mapArray = action.payload;
    }
  },
});

export const { addSelectedLocation, removeSelectedLocation,addMapLocation } = locationSlice.actions