import { DatePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"

interface DateAddedPicker {
    value: Dayjs
    handleChange: (newValue: Dayjs) => void
}

export const DateAddedPicker = (props: DateAddedPicker) => {
    const { value, handleChange } = props
    return (
        <DatePicker 
            value={value}
            onChange={(event) => handleChange(dayjs(event))}
            label="Date Added"
        />
    )
}
