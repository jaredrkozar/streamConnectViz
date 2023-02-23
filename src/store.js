import { configureStore } from '@reduxjs/toolkit'
import {locationSlice } from "./locationListManager";
import {imageSlice } from "./imageManager";

export const store = configureStore({
    reducer: {
        locationStore: locationSlice.reducer,
        imageStore: imageSlice.reducer
    },
})