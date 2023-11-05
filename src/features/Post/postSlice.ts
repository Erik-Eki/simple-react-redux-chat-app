import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import pool from '../../api/db';

// Define the type of the post object
interface Post {
  id: number;
  title: string;
  content: string;
}

// Define the type of the state that the thunk action needs
interface RootState {
  posts: Post[];
}

// Define the type of the thunk action
type FetchPostsThunk = ThunkAction<Promise<void>, RootState, unknown, AnyAction>;

// Define the thunk action creator
export const fetchPosts = (): FetchPostsThunk => async (dispatch) => {
  try {
    // Query the database and get the results
    const res = await pool.query('SELECT * FROM posts');
    const posts: Post[] = res.rows;

    // Dispatch an action to update the state with the posts
    dispatch({
      type: 'FETCH_POSTS_SUCCESS',
      payload: posts,
    });
  } catch (err) {
    // Handle any errors and dispatch an action to update the state with the error
    dispatch({
      type: 'FETCH_POSTS_FAILURE',
      payload: err.message,
    });
  }
};
