import { Console } from "./ConsoleTypes"
import { Genre } from "./GenreTypes"

export interface Game {
    id: string
    title: string
    status: GameStatus
    console: Console
    format: GameFormat
    genre: Genre
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
    consoleId: string
    format: GameFormat
    genreId: string
    length: number
    createdAt: string
    dateCompleted: string | null
}

// TODO: See about just using a bool for this
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
