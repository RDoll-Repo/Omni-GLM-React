import { Grid } from "@mui/material"
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


    return(
        <Grid container spacing={12} direction="row">
            <Grid item xs={9}>
                <DemoPanelHeader onClick={setPanelStatus}/>
                <DemoPanelLibraryList games={library}/>
            </Grid>
            <Grid item xs={3}>
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
