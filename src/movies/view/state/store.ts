import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { MoviesRepository } from '../../data/repositories/MoviesRepository';

import moviesReducer from './reducer/reducer';
// ...
export const store = configureStore({
  reducer: moviesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesRepository.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type MovieDispatch = typeof store.dispatch;
