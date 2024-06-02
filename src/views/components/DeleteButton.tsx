import { Button } from "@mui/material"
import TrashIcon from "../../assets/trash-solid.svg"
import { useAppDispatch } from "../../store/store"
import { deleteGame } from "../../store/slices/librarySlice"

interface DeleteButtonProps {
    id: string
}

export const DeleteButton = (props: DeleteButtonProps) => {
    const { id } = props
    const dispatch = useAppDispatch()

    return(
        <Button>
            <img 
                src={TrashIcon} 
                width="20px" 
                alt="Trash Icon" 
                onClick={() => dispatch(deleteGame(id))}
            />
        </Button>
    )
}
