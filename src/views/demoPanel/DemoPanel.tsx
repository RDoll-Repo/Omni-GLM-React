import { Grid, List, Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { RootState, useAppDispatch } from "../../store/store"
import { fetchLibrary } from "../../store/slices/librarySlice"
import { useSelector } from "react-redux"
import { DemoPanelHeader } from "./DemoPanelHeader"
import { DemoPanelLibraryList } from "./DemoPanelLibraryList"
import { DemoPanelInputForm } from "./DemoPanelInputForm"

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
        <Grid container spacing={12}>
            <Grid item>
                <DemoPanelHeader />
                <DemoPanelLibraryList />
            </Grid>
            <Grid item>
                <DemoPanelInputForm />
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
