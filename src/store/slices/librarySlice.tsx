import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateGamePayload, Game } from "../../types/LibraryTypes";
import { createGameAsync, fetchLibraryAsync } from "../../api/requests/libraryRequests";
import { fetchConsolesAsync } from "../../api/requests/consoleRequests";
import { Console } from "../../types/ConsoleTypes";
import { fetchGenresAsync } from "../../api/requests/genreRequests";
import { Genre } from "../../types/GenreTypes";

export interface LibraryState {
    library: Game[]
    consoles: Console[]
    genres: Genre[]
    refetchPending: boolean
}

const initialState = {
    library: [] as Game[], 
    consoles: [] as Console[],
    genres: [] as Genre[],
    refetchPending: true
} as LibraryState

// Temp implementation - to be full search later
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

export const fetchGenres = createAsyncThunk(
    'oglm/genres',
    async (_, thunkApi) => {
        try {
            const response = await fetchGenresAsync()

            return response
        } catch (e) {
            console.log(e)
            thunkApi.rejectWithValue(e)
        }
    }
)

export const createGame = createAsyncThunk(
    'oglm/consoles/create',
    async (payload: CreateGamePayload, thunkApi) => {
        try {
            const response = await createGameAsync(payload)

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
                state.refetchPending = false
            }
        })
        builder.addCase(fetchConsoles.fulfilled, (state, action) => {
            if (action.payload) {
                state.consoles = action.payload.data.consoles
            }
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            if (action.payload) {
                state.genres = action.payload.data.genres
            }
        })
        builder.addCase(createGame.fulfilled, (state, action) => {
            if (action.payload) {
                state.refetchPending = true
            }
        })
    }
})


export default librarySlice
