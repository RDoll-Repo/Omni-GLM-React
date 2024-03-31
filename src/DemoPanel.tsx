import { Button, List } from "@mui/material"
import { useEffect } from "react"
import { RootState, useAppDispatch } from "./store/store"
import { fetchLibrary } from "./store/slices/librarySlice"
import { useSelector } from "react-redux"

export const DemoPanel = () => {
    const dispatch = useAppDispatch()
    const { library } = useSelector((state: RootState) => state.library)

    useEffect(() => {
        dispatch(fetchLibrary())
    }, [dispatch])

    return (
        <>
            <List>
                <li>Hi</li>
                <li>Game 2</li>
                <li>Game 3</li>
                <li>Game 4</li>
            </List>
            <Button>Add Game+</Button>
        </>
    )
}