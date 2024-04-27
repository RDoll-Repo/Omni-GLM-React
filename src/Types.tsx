/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SerializeableAxiosResponse {
    requestBody: any
    requestHeaders: object
    responseBody: any
    responseHeaders: object
    statusCode: number
}

export interface Game {
    id: string
    title: string
    status: string
    console: string
    format: string
    genre: string
    length: number
    createdAt: Date
    updatedAt: Date
    dateCompleted: Date
}

export interface SearchLibraryReponse {
    games: Game[]
}

export interface ApiResponse<TData> {
    data: TData
}

export interface ApiResponseWithMeta<TMeta, TData> {
    meta: TMeta
    data: TData
}

export interface SearchResponseMeta {
    count: number
}