import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, MovieDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useMovieDispatch = () => useDispatch<MovieDispatch>();
export const useMovieSelector: TypedUseSelectorHook<RootState> = useSelector;
