import { createSlice } from "@reduxjs/toolkit";

interface GeolocationStete {
    latitude: number | null;
    longitude: number | null;
    street: string;
    cep: string;
    isFindLocation: boolean;
}

/**
 *@method reducers => São as actions do redux, ali poderemos mudar o estado do inital state da aplicaçã
 * 
 * 
 * 
 *
 *  
 **/


const initialState: GeolocationStete = {
    latitude: 0,
    longitude: 0,
    street: '',
    cep: '',
    isFindLocation: false
}
 const useGelocationSlice = createSlice({
    name: 'geolocationSlice',
    initialState,
    reducers: {
        fetchMapApi: (state, action) => {
            return state.street = action.payload
        }
    }
})

// eslint-disable-next-line no-empty-pattern
export const { fetchMapApi } = useGelocationSlice.actions;

export default useGelocationSlice;