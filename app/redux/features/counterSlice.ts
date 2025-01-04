
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

// // Define a type for the slice state
// interface CounterState {
//     value: number
// }

// // Define the initial state using that type
// const initialState: CounterState = {
//     value: 0,
// }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload;
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    }
});

export const { increment, decrement } = counterSlice.actions;

// export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer;