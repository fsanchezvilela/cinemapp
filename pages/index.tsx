/*  eslint-disable  */
import React from 'react';
import Head from 'next/head';
import Button from '../src/common/view/components/button/Button';
import MoviesContainer from '../src/movies/view/containers/MoviesContainer';
import { store as MoviesStore } from '../src/movies/view/state/store';
import { Provider } from 'react-redux';

const Home = () => {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}
        />
        <link rel="icon" href="/assets/icons/favicon/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Provider store={MoviesStore}>
        <MoviesContainer />
      </Provider>
    </div>
  );
};

export default Home;
