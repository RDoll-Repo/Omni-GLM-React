import { SearchLibraryReponse } from "../../types/LibraryTypes"
import { ApiResponseWithMeta, SearchResponseMeta } from "../../types/UtilityTypes"
import api from "../api"

export const fetchLibraryAsync = async () => {
    const response = await api.get<ApiResponseWithMeta<SearchResponseMeta, SearchLibraryReponse>>(
        'library'
    )

    return response.data
}
