import { commentsReducer, postsReducer, usersReducer } from './functions/index';

const commonReducer = {
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
};

export default commonReducer;
