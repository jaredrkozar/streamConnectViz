import { configureStore } from '@reduxjs/toolkit'
import {locationSlice } from "./reducers/locationListManager";
import {imageSlice } from "./reducers/imageManager";
import { dateSlice } from "./reducers/dateListManager";

export const store = configureStore({
    reducer: {
        locationStore: locationSlice.reducer,
        imageStore: imageSlice.reducer,
        dateSlice: dateSlice.reducer
    },
})