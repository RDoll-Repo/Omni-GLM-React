import { Container, TextField, Typography } from "@mui/material"
import { Game, PanelStatus } from "../../../Types"

interface DemoPanelInputFormProps {
    mode: PanelStatus
    game: Game | null
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const { mode, game } = props
    
    return (
        <Container sx={{background: "grey", padding: "24px 12px"}}>
            <Typography mb={6}>
                {mode == PanelStatus.Editing ? "Edit Game" : "Add Game"}
            </Typography>
            <TextField
                id="title-textfield"
                label="Title"
                defaultValue={mode == PanelStatus.Editing ? game?.title : ""}
                color="secondary"
                sx={{background: "white"}}
            />
        </Container>
    )
}