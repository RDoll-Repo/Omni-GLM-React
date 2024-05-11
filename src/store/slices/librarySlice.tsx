import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../types/LibraryTypes";
import { fetchLibraryAsync } from "../../api/requests/libraryRequests";
import { fetchConsolesAsync } from "../../api/requests/consoleRequests";
import { Console } from "../../types/ConsoleTypes";

export interface LibraryState {
    library: Game[]
    consoles: Console[]
}

const initialState = {
    library: [] as Game[], 
    consoles: [] as Console[]
} as LibraryState

// Temp implementation
export const fetchLibrary = createAsyncThunk(
    'oglm/library',
    async (_, thunkApi) => {
        try {
            const response = await fetchLibraryAsync()

            return response
        } catch (e) {
            console.log(e)
            thunkApi.rejectWithValue(e)
        }
    }
)

export const fetchConsoles = createAsyncThunk(
    'oglm/consoles',
    async (_, thunkApi) => {
        try {
            const response = await fetchConsolesAsync()

            return response
        } catch (e) {
            console.log(e)
            thunkApi.rejectWithValue(e)
        }
    }
)

export const librarySlice = createSlice({
    name: 'Library',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLibrary.fulfilled, (state, action) => {
            if (action.payload) {
                state.library = action.payload.data.games
            }
        })
        builder.addCase(fetchConsoles.fulfilled, (state, action) => {
            if (action.payload) {
                state.consoles = action.payload.data.consoles
            }
        })
    }
})


export default librarySlice
