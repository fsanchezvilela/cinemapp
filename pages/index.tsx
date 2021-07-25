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
      </Head>
      <Button>Click me</Button>
      <Provider store={MoviesStore}>
        <MoviesContainer />
      </Provider>
    </div>
  );
};

export default Home;
