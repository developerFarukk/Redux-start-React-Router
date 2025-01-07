
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0
    },
    reducers: {}
})


export const {  } = userSlice.actions


export default userSlice.reducer;