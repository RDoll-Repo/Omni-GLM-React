import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
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
                fullWidth
            />
            <Stack direction="row" justifyContent="space-between" mt={2}>
                <FormControl>
                    <FormLabel id="radio-status">Status</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value={"Backlog"} control={<Radio />} label={"Backlog"} />
                        <FormControlLabel value={"Playing"} control={<Radio />} label={"Playing"} />
                        <FormControlLabel value={"Finished"} control={<Radio />} label={"Finished"} />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="radio-format">Format</FormLabel>
                    <RadioGroup title="Format">
                        <FormControlLabel value={"Physical"} control={<Radio />} label={"Physical"} />
                        <FormControlLabel value={"Digital"} control={<Radio />} label={"Digital"} />
                        <FormControlLabel value={"Collector's"} control={<Radio />} label={"Collector's"} />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <TextField
                id="outlined-number"
                label="Hours"
                type="number"
                size="small"
                sx={{background: "white"}}
            />
        </Container>
    )
}