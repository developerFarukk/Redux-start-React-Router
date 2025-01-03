
import counterReducer from "../redux/features/counterSlice"

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})