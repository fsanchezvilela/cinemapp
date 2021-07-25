import { IMovie } from '../../domain/models/Movie';
import { IMoviesResultsApiRest } from './interfaces';

export const toMovieDomain = (
  movies: Array<IMoviesResultsApiRest>
): Array<IMovie> => {
  return movies.map(
    ({ id, title, vote_average, vote_count, poster_path, overview }) => {
      return {
        id,
        title,
        description: overview,
        voteAvg: vote_average,
        voteCount: vote_count,
        imgUrl: poster_path,
      };
    }
  );
};
