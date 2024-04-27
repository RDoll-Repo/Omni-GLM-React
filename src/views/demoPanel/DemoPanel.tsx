import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { RootState, useAppDispatch } from "../../store/store"
import { fetchLibrary } from "../../store/slices/librarySlice"
import { useSelector } from "react-redux"
import { DemoPanelHeader } from "./components/DemoPanelHeader"
import { DemoPanelLibraryList } from "./components/DemoPanelLibraryList"
import { DemoPanelInputForm } from "./components/DemoPanelInputForm"
import { PanelStatus } from "../../Types"

export const DemoPanel = () => {
    const dispatch = useAppDispatch()
    const { library } = useSelector((state: RootState) => state.library)

    const [panelStatus, setPanelStatus] = useState<PanelStatus>(PanelStatus.Viewing)

    useEffect(() => {
        dispatch(fetchLibrary())
    }, [dispatch])

    useEffect(() => {
        console.log(panelStatus)
    }, [panelStatus])

    const games = library.map((g, index) => {
        return (<Typography key={index}>{g.title}</Typography>)
    })

    return(
        <Grid container spacing={12} direction="row">
            <Grid item xs={8}>
                <DemoPanelHeader onClick={setPanelStatus}/>
                <DemoPanelLibraryList />
            </Grid>
            <Grid item xs={4}>
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
