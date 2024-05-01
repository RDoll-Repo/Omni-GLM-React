import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { GameStatus } from "../../../../types/LibraryTypes"

interface GameStatusInputProps {
    value: GameStatus
    handleChange: (newValue: GameStatus) => void
}

const convertStatusStringToEnum = (value: string) => {
    console.log("VALUE" + value)
    switch (value) {
        case "0": {
            return GameStatus.Backlog
        }
        case "1": {
            return GameStatus.Playing
        }
        default: {
            return GameStatus.Finished
        }
    }
}

export const GameStatusInput = (props: GameStatusInputProps) => {
    const { value, handleChange } = props

    return (
        <FormControl>
            <FormLabel id="radio-status">Status</FormLabel>
            <RadioGroup
                name="status-radio-group"
                value={value}
                onChange={(event) => handleChange(
                    convertStatusStringToEnum(event.target.value)
                )}
            >
                <FormControlLabel value={GameStatus.Backlog} control={<Radio />} label={"Backlog"} />
                <FormControlLabel value={GameStatus.Playing} control={<Radio />} label={"Playing"} />
                <FormControlLabel value={GameStatus.Finished} control={<Radio />} label={"Finished"} />
            </RadioGroup>
        </FormControl>
    )
}