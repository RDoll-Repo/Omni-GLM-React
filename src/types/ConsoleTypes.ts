export interface Console {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
}

export interface SearchConsolesResponse {
    consoles: Console[]
}
