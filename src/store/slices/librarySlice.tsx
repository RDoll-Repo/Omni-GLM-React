import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../Types";

export interface LibraryState {
    library: Game[]
}

const initialState = {
    library: []
} as LibraryState

// Temp implementation
export const fetchLibrary = createAsyncThunk(
    'oglm/library',
    async(_, thunkApi) => {
        try {
            const response = await
        }
    }
)

export const librarySlice = createSlice({
    name: 'Library',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})