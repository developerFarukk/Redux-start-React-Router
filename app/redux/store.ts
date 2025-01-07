
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../redux/features/counterSlice"
import logger from './middlewares/logger';
import taskReducer from "./features/task/taskSlice"
import userReducer from "../components/pages/auth/users/UserSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: taskReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
