import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { Game } from "../../../Types"
import { DemoPanelLibraryListItem } from "./DemoPanelLibraryListItem"

interface DemoPanelLibraryListProps {
    games: Game[]
}

export const DemoPanelLibraryList = (props: DemoPanelLibraryListProps) => {
    const { games } = props

    const rows = games.map((g, index) => {
        return (<DemoPanelLibraryListItem key={index} game={g}/>)
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