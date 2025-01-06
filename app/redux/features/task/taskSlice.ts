import type { RootState } from "@/redux/store";
import { filterTask, priorityEnam, type DraftTask, type ITask } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filterTask: filterTask;
}

const initialState: InitialState = {
    tasks: [
        {
            id: "Fjsdjfhb89734fsd54fgsd",
            title: "React Router 19",
            description: "This is a new powerfull femwork",
            dueDate: new Date(),
            isCompleted: false,
            priority: priorityEnam.high
        }
    ],
    filterTask: filterTask.All
}

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {

        // Add Task
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

        // Check box Togol
        toggleCompletedStatus: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.isCompleted = !task.isCompleted;
                }
            });
        },

        // Delete Task
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },

        // Update Filter
        updateFilter: (state, Action: PayloadAction<filterTask>) => {
            state.filterTask = Action.payload;
        }
    },
});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filterTask;

    if (filter === "low") {
        return state.todo.tasks.filter((task) => task.priority === "low");
    } else if (filter === "medium") {
        return state.todo.tasks.filter((task) => task.priority === "medium");
    } else if (filter === "high") {
        return state.todo.tasks.filter((task) => task.priority === "high");
    } else {
        return state.todo.tasks;
    }
}

export const selectFilter = (state: RootState) => {
    return state.todo.filterTask
}

export const { addTask, toggleCompletedStatus, deleteTask, updateFilter } = taskSlice.actions;


export default taskSlice.reducer;