import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { Game } from "../../../types/LibraryTypes"
import { DemoPanelLibraryListItem } from "./DemoPanelLibraryListItem"

interface DemoPanelLibraryListProps {
    games: Game[]
    onEditClick: (value: React.SetStateAction<Game | null>) => void
}

export const DemoPanelLibraryList = (props: DemoPanelLibraryListProps) => {
    const { games, onEditClick } = props

    const setCurrentGame = (id: string) => {
        const game = games.find(g => g.id === id)

        if (game) {
            onEditClick(game)
        }
    }

    const rows = games.map((g, index) => {
        return (<DemoPanelLibraryListItem key={index} game={g} onEditClick={setCurrentGame}/>)
    })
    
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography color="white" variant="h5">Title</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Status</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Console</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Format</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Genre</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Genre</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="white" variant="h5">Actions</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    )
}