import { ApiResponseWithMeta, SearchLibraryReponse, SearchResponseMeta } from "../../Types"
import api from "../api"

export const fetchLibraryAsync = async () => {
    const response = await api.get<ApiResponseWithMeta<SearchResponseMeta, SearchLibraryReponse>>(
        'library'
    )

    return response.data
}