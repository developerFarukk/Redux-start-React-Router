import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[]; 
}

const initialState: InitialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload)
        }
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask } = taskSlice.actions;


export default taskSlice.reducer;