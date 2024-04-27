import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../Types";
import { fetchLibraryAsync } from "../../api/requests/libraryRequests";

export interface LibraryState {
    library: Game[]
}

const initialState = {
    library: [] as Game[]
} as LibraryState

// Temp implementation
export const fetchLibrary = createAsyncThunk(
    'oglm/library',
    async (_, thunkApi) => {
        try {
            console.log("HI")
            const response = await fetchLibraryAsync()

            console.log(response)
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
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchLibrary.fulfilled, (state, action) => {
           
            if (action.payload) {
                console.log("OHAI")
                state.library = action.payload.data.games
            }
        })
    }
})


export default librarySlice