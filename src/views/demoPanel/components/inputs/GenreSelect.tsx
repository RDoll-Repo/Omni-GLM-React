import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Genre } from "../../../../types/GenreTypes"

export interface GenreSelectProps {
    genres: Genre[]
    value: string
    handleChange: (newValue: string) => void
    isInErrorState: boolean
}

export const GenreSelect = (props: GenreSelectProps) => {
    const { genres, value, handleChange, isInErrorState } = props

    const options = genres.map((g, index) => {
        return(
            <MenuItem value={g.id} key={index}>
                {g.title}
            </MenuItem>
        )
    })

    return (
        <FormControl>
            <InputLabel>Genre</InputLabel>
            <Select
                label="Genre"
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
