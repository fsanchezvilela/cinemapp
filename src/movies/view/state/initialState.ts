import { IMovie } from '../../domain/models/Movie';

// Define a type for the slice state
interface IinitialState {
  currentMovie: IMovie;
  step: number;
}

// Define the initial state using that type
const initialState: IinitialState = {
  currentMovie: null,
  step: 0,
};

export default initialState;
