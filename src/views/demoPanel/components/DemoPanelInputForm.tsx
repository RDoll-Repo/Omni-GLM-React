import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { CreateGamePayload, Game, GameFormat, GameStatus, PanelStatus } from "../../../types/LibraryTypes"
import { useCallback, useEffect, useState } from "react"
import { GameTitleInput } from "./inputs/GameTitleInput"
import { GameStatusInput } from "./inputs/GameStatusInput"
import { GameFormatInput } from "./inputs/GameFormatInput"
import { fetchConsoles } from "../../../store/slices/librarySlice"
import { RootState, useAppDispatch } from "../../../store/store"
import { useSelector } from "react-redux"
import { ConsoleSelect } from "./inputs/ConsoleSelect"

interface DemoPanelInputFormProps {
    mode: PanelStatus
    game: Game | null
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const dispatch = useAppDispatch()
    const { mode, game } = props
    const { consoles } = useSelector((state: RootState) => state.library)

    const [titleInput, setTitleInput] = useState(game?.title ?? "")
    const [statusInput, setStatusInput] = useState(game?.status ?? GameStatus.Backlog)
    const [formatInput, setFormatInput] = useState(game?.format ?? GameFormat.Physical)
    const [consoleInput, setConsoleInput] = useState("")

    const [titleIsValid, setTitleIsValid] = useState(true)
    const [consoleIsValid, setConsoleIsValid] = useState(true)

    useEffect(() => {
        dispatch(fetchConsoles())
    }, [dispatch])

    const submitCreate = useCallback(() => {
        let readyToSubmit = true

        console.log(consoleInput)

        // Go through inputs individually, bail if any fail
        if (titleInput !== "") {
            setTitleIsValid(true)
        } else {
            setTitleIsValid(false)
            readyToSubmit = false
        }

        if (consoleInput !== "") {
            setConsoleIsValid(true)
        } else {
            setConsoleIsValid(false)
            readyToSubmit= false
        }

        if (readyToSubmit) {
            // Compose payload
            const payload: CreateGamePayload = {
                title: titleInput,
                status: statusInput,
                console: consoleInput,
                format: formatInput,
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

    }, [titleInput, statusInput, formatInput, consoleInput])

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
                <GameStatusInput value={statusInput} handleChange={setStatusInput} />
                <GameFormatInput value={formatInput} handleChange={setFormatInput} />
            </Stack>
            <TextField
                id="outlined-number"
                label="Hours"
                type="number"
                size="small"
                sx={{background: "white", mt:"16px"}}
            />
            <Stack direction="row" justifyContent="space-evenly" mt={2}>
                <ConsoleSelect consoles={consoles} value={consoleInput} handleChange={setConsoleInput} isInErrorState={!consoleIsValid}/> 
                {/*<Select label="Genre" sx={{background: "white", minWidth: "160px"}}>
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