import { TextField } from "@mui/material"
import { ValidatedInput } from "../../../../types/UtilityTypes"

interface LibraryTitleInputProps {
    value: string
    onChange: (newValue: string) => void
    isInErrorState: boolean
}

export const LibraryTitleInput = (props: LibraryTitleInputProps) => {
    const { value, onChange, isInErrorState } = props

    return (
        <TextField
            id="title-textfield"
            label="Title"
            defaultValue={value}
            color="secondary"
            sx={{background: "white"}}
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            error={isInErrorState}
            helperText={isInErrorState ? "Cannot be empty" : null}
        />
    )
}