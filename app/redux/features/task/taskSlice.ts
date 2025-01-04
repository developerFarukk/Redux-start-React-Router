import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: {
        id: "F1474542",
        title: "Initialize Frontend",
        description: "Create Home page, and Roution",
        duedate: "2025-5-01",
        isCompleted: false,
        priority: "High"
    }
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {},
});


export default taskSlice.reducer;