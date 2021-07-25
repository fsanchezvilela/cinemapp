import { MoviesRepository } from '../../../data/repositories/MoviesRepository';
import { usersReducer, postsReducer, commentsReducer } from './functions';

const moviesReducer = {
  [MoviesRepository.reducerPath]: MoviesRepository.reducer,
  usersReducer,
  postsReducer,
  commentsReducer,
};
export default moviesReducer;
