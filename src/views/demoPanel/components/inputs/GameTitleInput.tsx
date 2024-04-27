import { TextField } from "@mui/material"

interface GameTitleInputProps {
    value: string
    handleChange: (newValue: string) => void
    isInErrorState: boolean
}

export const GameTitleInput = (props: GameTitleInputProps) => {
    const { value, handleChange, isInErrorState } = props

    return (
        <TextField
            id="title-textfield"
            label="Title"
            defaultValue={value}
            color="secondary"
            sx={{background: "white"}}
            fullWidth
            onChange={(event) => handleChange(event.target.value)}
            error={isInErrorState}
            helperText={isInErrorState ? "Cannot be empty" : null}
        />
    )
}