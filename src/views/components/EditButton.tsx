import { Button } from "@mui/material"
import PencilIcon from "../../assets/pencil-solid.svg"

interface EditButtonProps {
    onClick: () => void
}

export const EditButton = (props: EditButtonProps) => {
    const { onClick } = props
    return(
        <Button>
            <img 
                src={PencilIcon} 
                width="20px" 
                alt="Pencil Icon" 
                onClick={onClick}
            />
        </Button>
    )
}