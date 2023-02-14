import { configureStore } from '@reduxjs/toolkit'
import {locationSlice } from "./locationListManager";

export const store = configureStore({
    reducer: {locationStore: locationSlice.reducer},
})