import { Button, Container, Stack, Typography } from "@mui/material"
import { CreateGamePayload, Game, GameFormat, GameStatus } from "../../../types/LibraryTypes"
import { useCallback, useEffect, useState } from "react"
import { GameTitleInput } from "./inputs/GameTitleInput"
import { GameStatusInput } from "./inputs/GameStatusInput"
import { GameFormatInput } from "./inputs/GameFormatInput"
import { createGame, fetchConsoles, fetchGenres } from "../../../store/slices/librarySlice"
import { RootState, useAppDispatch } from "../../../store/store"
import { useSelector } from "react-redux"
import { ConsoleSelect } from "./inputs/ConsoleSelect"
import { GenreSelect } from "./inputs/GenreSelect"
import { HoursInput } from "./inputs/HoursInput"
import { DateAddedPicker } from "./inputs/DateAddedPicker"
import dayjs from "dayjs"
import { DateCompletedPicker } from "./inputs/DateCompletedPicker"

interface DemoPanelInputFormProps {
    game: Game | null
    setPanelIsVisible: (value: boolean) => void
}

export const DemoPanelInputForm = (props: DemoPanelInputFormProps) => {
    const dispatch = useAppDispatch()
    const { game, setPanelIsVisible } = props
    const { consoles, genres, refetchPending } = useSelector((state: RootState) => state.library)

    const [titleInput, setTitleInput] = useState(game?.title ?? "")
    const [statusInput, setStatusInput] = useState(game?.status ?? GameStatus.Backlog)
    const [formatInput, setFormatInput] = useState(game?.format ?? GameFormat.Physical)
    const [consoleInput, setConsoleInput] = useState(game?.console.id ?? "")
    const [genreInput, setGenreInput] = useState(game?.genre.id ?? "")
    const [hoursInput, setHoursInput] = useState(game?.length.toString() ?? "0")
    const [dateAddedInput, setDateAddedInput] = useState(dayjs(game?.createdAt) ?? dayjs("02-02-2022"))
    const [dateCompletedInput, setDateCompletedInput] = useState(dayjs(game?.dateCompleted) || null)

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
                length: parseInt(hoursInput),
                createdAt: dayjs(dateAddedInput).toISOString(),
                dateCompleted: statusInput === GameStatus.Finished ? 
                    dayjs(dateCompletedInput).toISOString() : 
                    null
            }
            console.log(payload)

            dispatch(createGame(payload))
        } else {
            console.log("Nope")
        }

    }, [
        dispatch,
        titleInput, 
        statusInput, 
        formatInput, 
        consoleInput, 
        genreInput, 
        hoursInput, 
        dateAddedInput,
        dateCompletedInput
    ])

    useEffect(() => {
        if (refetchPending) {
            setPanelIsVisible(false)
        }
    }, [refetchPending, setPanelIsVisible])

    return (
        <Container sx={{background: "lightgrey", padding: "24px 12px"}}>
            <Stack direction="column" spacing="24px">
                <Typography mb="24px">
                    {game?.id ? "Edit Game" : "Add Game"}
                </Typography>
                <GameTitleInput 
                    handleChange={setTitleInput} 
                    value={titleInput}
                    isInErrorState={!titleIsValid}
                />
                <Stack direction="row" justifyContent="space-between">
                    <GameStatusInput value={statusInput} handleChange={setStatusInput} />
                    <GameFormatInput value={formatInput} handleChange={setFormatInput} />
                </Stack>
                <HoursInput value={hoursInput} handleChange={setHoursInput} isInErrorState={!hoursIsValid}/>
                <Stack direction="row" justifyContent="space-evenly">
                    <ConsoleSelect consoles={consoles} value={consoleInput} handleChange={setConsoleInput} isInErrorState={!consoleIsValid}/> 
                    <GenreSelect genres={genres} value={genreInput} handleChange={setGenreInput} isInErrorState={!genreIsValid} />
                </Stack>
                <DateAddedPicker value={dateAddedInput} handleChange={setDateAddedInput}/>
                <DateCompletedPicker 
                    value={dateCompletedInput} 
                    handleChange={setDateCompletedInput}
                    disabled={statusInput !== GameStatus.Finished} 
                />
                <Stack direction="row" justifyContent="space-evenly" mt={2}>
                    <Button variant="contained" onClick={() => setPanelIsVisible(false)}>Cancel</Button>
                    <Button variant="contained" onClick={submitCreate}>Confirm</Button>
                </Stack>
            </Stack>
        </Container>
    )
}