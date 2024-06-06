import { configureStore } from "@reduxjs/toolkit";
import useGelocationSlice from './gelocation.slice'

export const storeGeolocation = configureStore({
    reducer: {
        geolocationSlice: useGelocationSlice.reducer
    }
})

