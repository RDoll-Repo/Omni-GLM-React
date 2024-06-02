import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { RootState, useAppDispatch } from "../../store/store"
import { fetchLibrary } from "../../store/slices/librarySlice"
import { useSelector } from "react-redux"
import { DemoPanelHeader } from "./components/DemoPanelHeader"
import { DemoPanelLibraryList } from "./components/DemoPanelLibraryList"
import { DemoPanelInputForm } from "./components/DemoPanelInputForm"
import { Game } from "../../types/LibraryTypes"

export const DemoPanel = () => {
    const dispatch = useAppDispatch()
    const { library, refetchPending } = useSelector((state: RootState) => state.library)

    const [panelIsVisible, setPanelIsVisible] = useState<boolean>(false)
    const [currentGame, setCurrentGame] = useState<Game | null>(null)
    // State for refetching after API requests

    useEffect(() => {
        if (refetchPending) {
            dispatch(fetchLibrary())
            setCurrentGame(null)
        }
    }, [dispatch, refetchPending])

    useEffect(() => {
        if (currentGame) {
            setPanelIsVisible(true)
        }
    }, [currentGame])


    return(
        <Grid container spacing={4} direction="row">
            <Grid item xs={panelIsVisible ? 8 : 12}>
                <DemoPanelHeader onClick={setPanelIsVisible}/>
                <DemoPanelLibraryList games={library} onEditClick={setCurrentGame}/>
            </Grid>
            { panelIsVisible && 
                <Grid item xs={4}>
                    <DemoPanelInputForm game={currentGame} setPanelIsVisible={setPanelIsVisible}/>
                </Grid>
            }
        </Grid>
    )
}
