import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { CreateGamePayload, Game, GameFormat, GameStatus, PanelStatus } from "../../../types/LibraryTypes"
import { useCallback, useEffect, useState } from "react"
import { GameTitleInput } from "./inputs/GameTitleInput"
import { GameStatusInput } from "./inputs/GameStatusInput"
import { GameFormatInput } from "./inputs/GameFormatInput"
import { fetchConsoles, fetchGenres } from "../../../store/slices/librarySlice"
import { RootState, useAppDispatch } from "../../../store/store"
import { useSelector } from "react-redux"
import { ConsoleSelect } from "./inputs/ConsoleSelect"
import { GenreSelect } from "./inputs/GenreSelect"
import { HoursInput } from "./inputs/HoursInput"

interface DemoPanelInputFormProps {
    mode: PanelStatus
    game: Game | null
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const dispatch = useAppDispatch()
    const { mode, game } = props
    const { consoles, genres } = useSelector((state: RootState) => state.library)

    const [titleInput, setTitleInput] = useState(game?.title ?? "")
    const [statusInput, setStatusInput] = useState(game?.status ?? GameStatus.Backlog)
    const [formatInput, setFormatInput] = useState(game?.format ?? GameFormat.Physical)
    const [consoleInput, setConsoleInput] = useState(game?.console.id ?? "")
    const [genreInput, setGenreInput] = useState(game?.genre.id ?? "")
    const [hoursInput, setHoursInput] = useState(game?.length.toString() ?? "0")

    const [titleIsValid, setTitleIsValid] = useState(true)
    const [consoleIsValid, setConsoleIsValid] = useState(true)
    const [genreIsValid, setGenreIsValid] = useState(true)
    const [hoursIsValid, setHoursIsValid] = useState(true)

    useEffect(() => {
        dispatch(fetchConsoles())
        dispatch(fetchGenres())
    }, [dispatch])

    const submitCreate = useCallback(() => {
        let readyToSubmit = true
        let hours = 0

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

        if (genreInput != "") {
            setGenreIsValid(true)
        } else {
            setGenreIsValid(false)
            readyToSubmit = false
        }

        if (!isNaN(+hoursInput) && +hoursInput > 0) {
            setHoursIsValid(true)
            hours = parseInt(hoursInput)
        } else {
            setHoursIsValid(false)
            readyToSubmit = false
        }

        if (readyToSubmit) {
            // Compose payload
            const payload: CreateGamePayload = {
                title: titleInput,
                status: statusInput,
                consoleId: consoleInput,
                format: formatInput,
                genreId: genreInput,
                length: hours,
                createdAt: null,            // TEMP
                dateCompleted: null         // TEMP
            }
            console.log(payload)

            console.log("Submit")
        } else {
            console.log("Nope")
        }

    }, [titleInput, statusInput, formatInput, consoleInput, genreInput, hoursInput])

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
            <HoursInput value={hoursInput} handleChange={setHoursInput} isInErrorState={!hoursIsValid}/>
            <Stack direction="row" justifyContent="space-evenly" mt={2}>
                <ConsoleSelect consoles={consoles} value={consoleInput} handleChange={setConsoleInput} isInErrorState={!consoleIsValid}/> 
                <GenreSelect genres={genres} value={genreInput} handleChange={setGenreInput} isInErrorState={!genreIsValid} />
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