import { MoviesRepository } from '../../../data/repositories/MoviesRepository';
import { movieSlice } from './slice';

const moviesReducer = {
  [MoviesRepository.reducerPath]: MoviesRepository.reducer,
  movies: movieSlice,
};
export default moviesReducer;
