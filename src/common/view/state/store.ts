import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './common-reducer/commonReducer';
// ...
export const store = configureStore({
  reducer: commonReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type CommonDispatch = typeof store.dispatch;
