import { Button, Stack, Typography } from "@mui/material"
import { PanelStatus } from "../../../Types"

interface DemoPanelHeaderProps {
    onClick: (value: PanelStatus) => void
}

export const DemoPanelHeader = (props: DemoPanelHeaderProps) => {
    // const theme = useTheme()
    const { onClick } = props

    return(
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h3">
                OMNI-GLM Demo Panel
            </Typography>
            <Button variant="contained" onClick={() => onClick(PanelStatus.Adding)}>
                +
            </Button>
        </Stack>
    )
}