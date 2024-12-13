import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment : (state, action) => {
            state.value += action.payload
        },
        decrement: (state, { payload }) => {
            state.value -= payload
        },
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer;