import { TextField } from "@mui/material"

interface HoursInputProps {
    value: string
    handleChange: (newValue: string) => void
    isInErrorState: boolean
}

export const HoursInput = (props: HoursInputProps) => {
    const { value, handleChange, isInErrorState } = props

    return (
        <TextField
            id="hours-input"
            label="Hours"
            defaultValue={value}
            color="secondary"
            size="small"
            sx={{background: "white", mt:"16px"}}
            onChange={(event) => handleChange(event.target.value)}
            error={isInErrorState}
            helperText={isInErrorState ? "Value must be a number greater than zero" : null}
        />
    )
}