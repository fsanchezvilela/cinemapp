import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../../../../domain/models/Movie';
import initialState from '../../initialState';
import type { RootState } from '../../store';

export const movieSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentMovie: (state, action: PayloadAction<IMovie>) => {
      state.currentMovie = action.payload;
    },
    setIncrementStep: (state) => {
      state.step += 1;
    },
    setDecrementStep: (state) => {
      state.step -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIncrementByAmount: (state, action: PayloadAction<number>) => {
      state.step += action.payload;
    },
  },
});

export const {
  setCurrentMovie,
  setIncrementStep,
  setDecrementStep,
  setIncrementByAmount,
} = movieSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMovie = (state: RootState) => state.movies;

export default movieSlice.reducer;
