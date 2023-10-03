/*Create a slice for comments and modify the components that utilize this slice.*/

//commentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, { payload }) {
      state.comments = payload;
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;

//postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.posts = payload;
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;

//usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
  },
});

export const { actions } = usersSlice;
export default usersSlice.reducer;

//index.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice.js';
import usersReducer from './usersSlice.js';
import commentsReducer from './commentsSlice.js';

export default configureStore({
  reducer: {
    usersReducer,
    postsReducer,
    commentsReducer,
  },
});

//App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Posts from './Posts.jsx';
import routes from '../routes.js';

import { actions as usersActions } from '../slices/usersSlice.js';
import { actions as postsActions } from '../slices/postsSlice.js';
import { actions as commentsActions } from '../slices/commentsSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(routes.getData());
      const {
        users,
        posts,
        comments,
      } = data;

      dispatch(usersActions.setUsers(users));
      dispatch(postsActions.setPosts(posts));
      dispatch(commentsActions.setComments(comments));
    };

    fetchData();
  });

  return (
    <div className="col-5">
      <Posts />
    </div>
  );
};

export default App;

//Comment.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  const { comment, author } = useSelector((state) => {
    const currentComment = state.commentsReducer.comments.find(({ id }) => id === commentId);
    const currentAuthor = state.usersReducer.users.find(({ id }) => id === currentComment.author);
    return { author: currentAuthor, comment: currentComment };
  });

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;

//Post.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment.jsx';

const Post = ({ post }) => {
  const author = useSelector((state) => {
    const currentAuthor = state.usersReducer.users.find(({ id }) => id === post.author);
    return currentAuthor;
  });

  return (
    <div className="card">
      <div className="card-header">
        {`${post.body} - ${author.name}`}
      </div>
      <div className="card-body">
        {post.comments.map((commentId) => <Comment key={commentId} commentId={commentId} />)}
      </div>
    </div>
  );
};

export default Post;

//Posts.jsx
import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  const { posts } = useSelector((state) => state.postsReducer);

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

//index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

//routes.js
const routes = {
  getData: () => '/api/data',
};

export default routes;
