import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: "F1474542",
            title: "Initialize Frontend 1",
            description: "Create Home page, and Roution",
            duedate: "2025-5-01",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "F147454244",
            title: "Task 2 Card 2",
            description: "Create Home page, Page Card 222",
            duedate: "2025-5-01",
            isCompleted: false,
            priority: "High"
        }
    ]
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}


export default taskSlice.reducer;