import { TableCell, TableRow, Typography } from "@mui/material"
import { Game } from "../../../Types"

interface DemoPanelLibraryListItemProps {
    game: Game
}

export const DemoPanelLibraryListItem = (props: DemoPanelLibraryListItemProps) => {
    const { title, status, console, format, genre, length } = props.game

    return (
        <TableRow>
            <TableCell align="left">
                <Typography color="white">{title}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{status}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{console}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{format}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{genre}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{`${length} Hours`}</Typography>
            </TableCell>
        </TableRow>
    )
}