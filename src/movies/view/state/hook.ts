import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, MovieDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCommonDispatch = () => useDispatch<MovieDispatch>();
export const useCommonSelector: TypedUseSelectorHook<RootState> = useSelector;
