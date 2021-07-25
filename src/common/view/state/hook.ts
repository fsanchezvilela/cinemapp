import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, CommonDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCommonDispatch = () => useDispatch<CommonDispatch>();
export const useCommonSelector: TypedUseSelectorHook<RootState> = useSelector;
