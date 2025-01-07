
import type { RootState } from '@/redux/store';
import type { DraftUser, IUser } from '@/types/types';
import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: [
        {
            id: "Fjsdjfhb89734fsd54fgsd",
            name: "MD OMAR FARUK RANA",
            email: "mama@mami.com",
        }
    ],
}

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add User
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData)
        },

        // Delete Task
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    }
})

export const selectUsers = ( state: RootState) => state.user.users

export const { addUser, deleteUser } = userSlice.actions


export default userSlice.reducer;