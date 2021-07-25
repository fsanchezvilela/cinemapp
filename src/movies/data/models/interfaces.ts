import { IMovie } from '../../domain/models/Movie';

export interface IMoviesApiRest extends IPageInfoApiRest {
  readonly results: Array<IMoviesResultsApiRest>;
}

export interface IMoviesTransform extends IPageInfoApiRest {
  readonly results: Array<IMovie>;
}

export interface IMoviesResultsApiRest {
  id: number;
  title: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
}

export interface IPageInfoApiRest {
  readonly page: number;
  readonly total_pages: number;
  readonly total_results: number;
}
