import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Console } from "../../../../types/ConsoleTypes";

export interface ConsoleSelectProps {
    consoles: Console[]
    value: string
    handleChange: (newValue: string) => void
    isInErrorState: boolean
}


export const ConsoleSelect = (props: ConsoleSelectProps) => {
    const { consoles, value, handleChange, isInErrorState } = props

    const options = consoles.map((c, index) => {
        return (
            <MenuItem value={c.id} key={index}>
                {c.title}
            </MenuItem>
        )
    })

    return (
        <FormControl>
            <InputLabel>Console</InputLabel>
            <Select 
                label="Console"
                value={value ? value : ""}
                onChange={(event) => handleChange(event.target.value)}
                sx={{background: "white", minWidth: "160px"}}
                error={isInErrorState}
            >
                {options}
            </Select>
        </FormControl>
    )
}

