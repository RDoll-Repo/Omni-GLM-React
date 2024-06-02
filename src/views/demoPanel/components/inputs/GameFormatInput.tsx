import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { GameFormat } from "../../../../types/LibraryTypes";

interface GameFormatInputProps {
    value: GameFormat
    handleChange: (newValue: GameFormat) => void
}

const convertFormatStringToEnum = (value: string) => {
    console.log("VALUE" + value)
    switch (value) {
        case "0": {
            return GameFormat.Physical
        }
        case "1": {
            return GameFormat.Digital
        }
        default: {
            return GameFormat.Special
        }
    }
}

export const GameFormatInput = (props: GameFormatInputProps) => {
    const { value, handleChange } = props

    return (
        <FormControl>
        <FormLabel id="radio-format">Format</FormLabel>
        <RadioGroup
            name="format-radio-group"
            value={value}
            onChange={(event) => handleChange(
                convertFormatStringToEnum(event.target.value)
            )}
        >
            <FormControlLabel value={GameFormat.Physical} control={<Radio />} label={"Physical"} />
            <FormControlLabel value={GameFormat.Digital} control={<Radio />} label={"Digital"} />
            <FormControlLabel value={GameFormat.Special} control={<Radio />} label={"Special"} />
        </RadioGroup>
    </FormControl>
    )
}
