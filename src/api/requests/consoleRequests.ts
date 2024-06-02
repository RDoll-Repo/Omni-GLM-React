import { SearchConsolesResponse } from "../../types/ConsoleTypes"
import { ApiResponse } from "../../types/UtilityTypes"
import api from "../api"

export const fetchConsolesAsync = async () => {
    const response = await api.get<ApiResponse<SearchConsolesResponse>>(
        "consoles"
    )

    return response.data
}
