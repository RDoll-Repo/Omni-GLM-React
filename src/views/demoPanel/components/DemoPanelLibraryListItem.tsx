import { TableCell, TableRow, Typography } from "@mui/material"
import { Game } from "../../../types/LibraryTypes"
import { EditButton } from "../../components/EditButton"
import { DeleteButton } from "../../components/DeleteButton"

interface DemoPanelLibraryListItemProps {
    game: Game
    onEditClick: (id: string) => void
}

export const DemoPanelLibraryListItem = (props: DemoPanelLibraryListItemProps) => {
    const { game, onEditClick } = props
    const { id, title, status, console, format, genre, length } = game

    return (
        <TableRow>
            <TableCell align="left">
                <Typography color="white">{title}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{status}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{console.title}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{format}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{genre.title}</Typography>
            </TableCell>
            <TableCell>
                <Typography color="white">{`${length} Hours`}</Typography>
            </TableCell>
            <TableCell>
                <EditButton onClick={() => onEditClick(id)}/>
                <DeleteButton id={id} />
            </TableCell>
        </TableRow>
    )
}