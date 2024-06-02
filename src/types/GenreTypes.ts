export interface Genre {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
}

export interface SearchGenresResponse {
    genres: Genre[]
}
