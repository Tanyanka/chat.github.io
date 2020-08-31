export type TPostItem = {
    userId: number,
    id: number,
    title: string,
    body: string
}
type TChat = {
    timestamp: number,
    message: string,
    name: string
}
export type TUsers = {
    name: string,
    id: number,
    chat: {
        [key: string]: {
            isActive: boolean,
            messages?: TChat[]
        }
    }
}
export type TBots = {
    name: string,
    id: number,
    questions: string[],
    img: string
}
