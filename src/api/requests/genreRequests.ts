import { SearchGenresResponse } from "../../types/GenreTypes"
import { ApiResponse } from "../../types/UtilityTypes"
import api from "../api"

export const fetchGenresAsync = async () => {
    const response = await api.get<ApiResponse<SearchGenresResponse>>(
        "genres"
    )

    return response.data
}
