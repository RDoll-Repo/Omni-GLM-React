import { MenuItem, Select } from "@mui/material";
import { Console } from "../../../../types/ConsoleTypes";

export interface ConsoleSelectProps {
    consoles: Console[]
    value: Console
    handleChange: (newValue: Console) => void
}


export const ConsoleSelect = (props: ConsoleSelectProps) => {
    const { consoles, value, handleChange } = props

    const options = consoles.map((c, index) => {
        return (
            <MenuItem value={c.id}>
                {c.title}
            </MenuItem>
        )
    })

    return (
        <Select label="Console" sx={{background: "white", minWidth: "160px"}}>
            {options}
        </Select>
    )
}

