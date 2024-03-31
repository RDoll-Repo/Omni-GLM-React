import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import librarySlice from "./slices/librarySlice";

const store = configureStore({
    reducer: {
        library: librarySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store