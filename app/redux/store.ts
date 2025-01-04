
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../redux/features/counterSlice"
import logger from './middlewares/logger';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
