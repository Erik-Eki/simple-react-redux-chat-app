/* Core */
// import { createSlice, type PayloadAction, ActionReducerMapBuilder  } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

/* Instruments */
import { fetchMessages, addMessage } from './thunks'

const initialState: MessageSliceState = {
  data: undefined,
  status: 'idle', // The status of the async operation
  error: undefined, // The error message if any
}
export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Add a new user to the state
    // addMessage(state, action) {
    //   state.data = action.payload
    // },
    // getMessage(state, action) {
    //   state.data = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        // Set the status to loading and reset the error
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        // Set the status to success and update the data
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        // Set the status to success and update the data
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addMessage.pending, (state) => {
        // Set the status to loading and reset the error
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        // Set the status to success and update the data
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(addMessage.rejected, (state, action) => {
        // Set the status to success and update the data
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
})


export const selectMessage = (state: RootState) => state.messages.data

/* Types */
export interface MessageSliceState {
  data: object | undefined
  status: 'idle' | 'loading' | 'failed'
  error: string | undefined
}


export default messageSlice.reducer