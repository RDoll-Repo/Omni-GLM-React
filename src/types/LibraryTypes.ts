export interface Game {
    id: string
    title: string
    status: GameStatus
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
