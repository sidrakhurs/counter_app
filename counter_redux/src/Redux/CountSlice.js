import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;  // Correctly update the state
        }
    }
})

export const { increment } = CountSlice.actions;
export default CountSlice.reducer;
