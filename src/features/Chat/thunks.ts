/* Instruments */
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMessages, insertMessage } from "./messsageAPI"
import { MessagesArray, MessageDataObject, SendMessageDataObject } from "./types"


// Define the type of the payload for the addPost action
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch((10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getMessages = createAsyncThunk<object, number>(
  'messages/fetchMessages',
  async (roomID) => {
    const response = await fetchMessages(roomID)

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const addMessage = createAsyncThunk<object, SendMessageDataObject>(
  'messages/insertMessage',
  async ({username, message, roomID}) => {
    const response = await insertMessage(username, message, roomID)

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

