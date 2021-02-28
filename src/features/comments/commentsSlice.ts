import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getComments } from '../../api/api';
import { IReview} from '../../interfaces/review';

interface commentsDisplayState {
  comments: IReview[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | boolean;
}

const initialState = {
  comments: [],
  status: 'idle',
  error: false,
} as commentsDisplayState;

const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  (id: string) => getComments(id)
);


const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComments.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchComments.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.comments = payload.comments;
    });
    builder.addCase(fetchComments.rejected, state => {
      state.status = 'failed';
      state.error = true;
    });
  }
});

export default comments.reducer;

export { fetchComments };
