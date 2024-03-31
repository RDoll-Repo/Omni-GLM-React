import { Game } from "../../Types"
import api from "../api"

export const fetchLibraryAsync = async () => {
    const response = await api.get<Game[]>(
        'library'
    )

    return response.data
}