/* Instruments */
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchIdentityMessages, insertIdentityMessage } from "./messsageAPI"


// Define the type of the payload for the addPost action
interface AddPostPayload {
  content: string
  sender: string
  roomID: number
}
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch((10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchMessages = createAsyncThunk(
  'messages/fetchIdentityMessages',
  async (roomID: string) => {
    const response = await fetchIdentityMessages(roomID)

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const addMessage = createAsyncThunk(//<AddPostPayload>
  'messages/insertIdentityMessage',
  async ({content, sender, roomID}) => {
    const response = await insertIdentityMessage(content, sender, roomID)

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

