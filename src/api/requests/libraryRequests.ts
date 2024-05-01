import { CreateGamePayload, Game, SearchLibraryReponse } from "../../types/LibraryTypes"
import { ApiPayload, ApiResponse, ApiResponseWithMeta, SearchResponseMeta } from "../../types/UtilityTypes"
import api from "../api"

export const fetchLibraryAsync = async () => {
    const response = await api.get<ApiResponseWithMeta<SearchResponseMeta, SearchLibraryReponse>>(
        "library"
    )

    return response.data
}

export const createGameAsync = async (data: CreateGamePayload) => {
    const payload: ApiPayload<CreateGamePayload> = {
        data: data
    }
    
    const response = await api.post<ApiResponse<Game>>(
        'library',
        payload
    )

    return response
}
