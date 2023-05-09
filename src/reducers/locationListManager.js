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
      console.log(action.payload)
      state.initialArray = state.initialArray.filter(location => (location.id != locationToDelete.id) || (location.date != locationToDelete.date))
      console.log(state.initialArray)
    },
    addMapLocation: (state, action) => {
      state.mapArray = action.payload;
    }
  },
});

export const { addSelectedLocation, removeSelectedLocation,addMapLocation } = locationSlice.actions