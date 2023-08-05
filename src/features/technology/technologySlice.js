import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"

const initialState = {
    techData: data.technology,
    currentTech: 0,
}

const techSlice = createSlice({
    name: "tech",
    initialState,
    reducers: {
        setTech: (state, { payload }) => {
            state.currentTech = payload
        }
    }
})

export const { setTech } = techSlice.actions

export default techSlice.reducer