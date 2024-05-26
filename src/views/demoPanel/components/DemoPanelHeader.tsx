import { Button, Stack, Typography } from "@mui/material"

interface DemoPanelHeaderProps {
    onClick: (value: boolean) => void
}

export const DemoPanelHeader = (props: DemoPanelHeaderProps) => {
    const { onClick } = props

    return(
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h3">
                OMNI-GLM Demo Panel
            </Typography>
            <Button variant="contained" onClick={() => onClick(true)}>
                +
            </Button>
        </Stack>
    )
}