import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"

const initialState = {
    crewData: data.crew,
    currentCrewMember: 0,
}

const crewSlice = createSlice({
    name: "crew",
    initialState,
    reducers: {
        setCrewMember: (state, { payload }) => {
            state.currentCrewMember = payload
        }
    }
})

export const { setCrewMember } = crewSlice.actions

export default crewSlice.reducer