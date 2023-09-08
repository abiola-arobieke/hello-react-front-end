import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk(
  'messages/getGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/messages/random');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  },
);

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    greeting: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload.greeting;
      })
      .addCase(getGreeting.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default messageSlice.reducer;
