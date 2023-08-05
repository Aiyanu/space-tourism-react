import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
const initialState = {
    destinationData:data.destinations,
    currentDestination: 0,
}

const destinationSlice = createSlice({
    name: "destination",
    initialState,
    reducers: {
        setDestination: (state, { payload }) => {
            state.currentDestination = payload
        }
    }
})

export const {setDestination} = destinationSlice.actions

export default destinationSlice.reducer