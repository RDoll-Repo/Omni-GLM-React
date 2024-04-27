import { Button, Grid, List, Typography } from "@mui/material"
import { useEffect } from "react"
import { RootState, useAppDispatch } from "../../store/store"
import { fetchLibrary } from "../../store/slices/librarySlice"
import { useSelector } from "react-redux"

export const DemoPanel = () => {
    const dispatch = useAppDispatch()
    const { library } = useSelector((state: RootState) => state.library)

    useEffect(() => {
        dispatch(fetchLibrary())
    }, [dispatch])

    const games = library.map((g, index) => {
        return (<Typography key={index}>{g.title}</Typography>)
    })

    return(
        <Grid container spacing={12} direction="row">
            <Grid item>
                <List>
                    {games}
                </List>
            </Grid>
            <Grid item>
                <List>
                    {games}
                </List>
            </Grid>
        </Grid>
    )



    // return (
    //     <>
    //         <List>
    //             {games}
    //         </List>
    //         <Button>Add Game+</Button>
    //     </>
    // )
}
