export interface MessagesArray {
    data: []
}

export interface MessageDataObject {
    room_id: number,
    sender: string,
    content: string
}

export interface SendMessageDataObject {
    username: string,
    message: string,
    roomID: number
}
