/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SerializeableAxiosResponse {
    requestBody: any
    requestHeaders: object
    responseBody: any
    responseHeaders: object
    statusCode: number
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

export interface ApiPayload<TData> {
    data: TData
}
