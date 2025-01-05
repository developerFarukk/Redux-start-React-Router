import type { RootState } from "@/redux/store";
import type { DraftTask, ITask } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[]; 
}

const initialState: InitialState = {
    tasks: []
}

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData)
        }
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask } = taskSlice.actions;


export default taskSlice.reducer;