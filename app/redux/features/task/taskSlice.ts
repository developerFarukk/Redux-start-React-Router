import type { RootState } from "@/redux/store";
import { priorityEnam, type DraftTask, type ITask } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        // {
        //     id: "Fjsdjfhb89734fsd54fgsd",
        //     title: "React Router 19",
        //     description: "This is a new powerfull femwork",
        //     dueDate: new Date(),
        //     isCompleted: false,
        //     priority: priorityEnam.high
        // }
    ]
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
        },

        // toggleCompletedStatus: (state, action: PayloadAction<string>) => {
        //     state.tasks.forEach((task) =>
        //         task.id = action.payload
        //             ? (task.isCompleted = !task.isCompleted) : task
        //     )
        // }

        toggleCompletedStatus: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.isCompleted = !task.isCompleted;
                }
            });
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter( (task) => task.id !== action.payload);
        }
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask, toggleCompletedStatus, deleteTask } = taskSlice.actions;


export default taskSlice.reducer;