import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice'; // Import the thunk action creator
import type { RootState } from '../../app/store';

// Define the type of the props for the component
interface Props {}

// Define the component
const Posts: React.FC<Props> = () => {
  // Get the dispatch function from the redux store
  const dispatch = useDispatch();

  // Get the posts and the error from the redux state
  const posts = useSelector((state: RootState) => state.posts);
  const error = useSelector((state: RootState) => state.error);

  // Fetch the posts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Render the posts or the error
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
