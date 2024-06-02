import { DatePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"

interface DateCompletedPicker {
    value: Dayjs | null
    handleChange: (newValue: Dayjs) => void
    disabled: boolean,
}

export const DateCompletedPicker = (props: DateCompletedPicker) => {
    const { value, handleChange, disabled } = props
    return (
        <DatePicker 
            value={value}
            onChange={(event) => handleChange(dayjs(event))}
            label="Date Completed"
            disabled={disabled}
        />
    )
}
