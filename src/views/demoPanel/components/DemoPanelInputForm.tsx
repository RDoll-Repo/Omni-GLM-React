import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import { Game, PanelStatus } from "../../../types/LibraryTypes"
import { useCallback, useState } from "react"
import { LibraryTitleInput } from "./inputs/LibraryTitleInput"

interface DemoPanelInputFormProps {
    mode: PanelStatus
    game: Game | null
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const { mode, game } = props

    const [titleInput, setTitleInput] = useState<string>(
        game?.title ?? ""
    )

    const [titleIsValid, setTitleIsValid] = useState(true)

    const submit = useCallback(() => {
        let readyToSubmit = true

        // Go through inputs individually, bail if any fail
        if (titleInput !== "") {
            setTitleIsValid(true)
        } else {
            setTitleIsValid(false)
            readyToSubmit = false
        }

        if (readyToSubmit) {
            console.log("Submit")
        } else {
            console.log("Nope")
        }

    }, [titleInput])

    return (
        <Container sx={{background: "lightgrey", padding: "24px 12px"}}>
            <Typography mb={6}>
                {mode == PanelStatus.Editing ? "Edit Game" : "Add Game"}
            </Typography>
            <LibraryTitleInput 
                onChange={setTitleInput} 
                value={titleInput}
                isInErrorState={!titleIsValid}
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
                sx={{background: "white", mt:"16px"}}
            />
            <Stack direction="row" justifyContent="space-evenly" mt={2}>
                {/* <Select label="Console" sx={{background: "white", minWidth: "160px"}}>
                    <MenuItem value="">
                        NA
                    </MenuItem>
                </Select>
                <Select label="Genre" sx={{background: "white", minWidth: "160px"}}>
                    <MenuItem value="">
                        NA
                    </MenuItem>
                </Select> */}
            </Stack>
            <TextField
                label="Date Added"
                defaultValue={mode == PanelStatus.Editing ? game?.title : ""}
                color="secondary"
                sx={{background: "white", mt: "16px"}}
                fullWidth
            />
            <TextField
                id="title-textfield"
                label="Date Complete"
                defaultValue={mode == PanelStatus.Editing ? game?.title : ""}
                color="secondary"
                sx={{background: "white", mt: "16px"}}
                fullWidth
            />
            <Stack direction="row" justifyContent="space-evenly" mt={2}>
                <Button variant="contained">Cancel</Button>
                <Button variant="contained" onClick={submit}>Confirm</Button>
            </Stack>
        </Container>
    )
}