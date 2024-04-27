export interface Game {
    id: string
    title: string
    status: GameStatus
    console: string
    format: GameFormat
    genre: string
    length: number
    createdAt: Date
    updatedAt: Date
    dateCompleted: Date
}

export interface SearchLibraryReponse {
    games: Game[]
}

export interface CreateGamePayload {
    title: string
    status: GameStatus
    console: string
    format: GameFormat
    genre: string
    length: number
    createdAt: Date | null
    dateCompleted: Date | null
}

export enum PanelStatus {
    Viewing,
    Adding,
    Editing
}

export enum GameStatus {
    Backlog,
    Playing,
    Finished
}

export enum GameFormat {
    Physical,
    Digital,
    Special
}
