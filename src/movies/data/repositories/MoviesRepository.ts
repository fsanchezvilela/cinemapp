// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMoviesApiRest, IMoviesTransform } from '../models/interfaces';
import { toMovieDomain } from '../models/transformers';

// Define a service using a base URL and expected endpoints
export const MoviesRepository = createApi({
  reducerPath: 'MoviesRepository',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMoviesDiscovery: builder.query<IMoviesTransform, string>({
      query: () => `discover/movie?api_key=82c05a745d0c6f1509cdc27e8d718342`,
      transformResponse: (response: IMoviesApiRest): IMoviesTransform => ({
        ...response,
        results: toMovieDomain(response.results),
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesDiscoveryQuery } = MoviesRepository;
