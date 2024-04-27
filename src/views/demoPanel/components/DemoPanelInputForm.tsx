import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import { CreateGamePayload, Game, GameFormat, GameStatus, PanelStatus } from "../../../types/LibraryTypes"
import { useCallback, useState } from "react"
import { GameTitleInput } from "./inputs/GameTitleInput"
import { GameStatusInput } from "./inputs/GameStatusInput"

interface DemoPanelInputFormProps {
    mode: PanelStatus
    game: Game | null
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const { mode, game } = props

    const [titleInput, setTitleInput] = useState(game?.title ?? "")
    const [statusInput, setStatusInput] = useState(game?.status ?? GameStatus.Backlog)

    const [titleIsValid, setTitleIsValid] = useState(true)

    const submitCreate = useCallback(() => {
        let readyToSubmit = true

        // Go through inputs individually, bail if any fail
        if (titleInput !== "") {
            setTitleIsValid(true)
        } else {
            setTitleIsValid(false)
            readyToSubmit = false
        }

        if (readyToSubmit) {
            // Compose payload
            const payload: CreateGamePayload = {
                title: titleInput,
                status: statusInput,
                console: "temp",            // TEMP
                format: GameFormat.Digital, // TEMP
                genre: "TEMP",              // TEMP
                length: 0,                  // TEMP
                createdAt: null,            // TEMP
                dateCompleted: null         // TEMP
            }
            console.log(payload)
            console.log("Submit")
        } else {
            console.log("Nope")
        }

    }, [titleInput, statusInput])

    return (
        <Container sx={{background: "lightgrey", padding: "24px 12px"}}>
            <Typography mb={6}>
                {mode == PanelStatus.Editing ? "Edit Game" : "Add Game"}
            </Typography>
            <GameTitleInput 
                handleChange={setTitleInput} 
                value={titleInput}
                isInErrorState={!titleIsValid}
            />
            <Stack direction="row" justifyContent="space-between" mt={2}>
                <GameStatusInput value={statusInput} handleChange={setStatusInput}/>
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
                <Button variant="contained" onClick={submitCreate}>Confirm</Button>
            </Stack>
        </Container>
    )
}