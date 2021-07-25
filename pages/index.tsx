/*  eslint-disable  */
import React from 'react';
import Head from 'next/head';
import Button from '../src/common/view/components/button/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const lol = async () => {
      const meme = await fetch(process.env.NEXT_PUBLIC_WEBSITE_MOVIE_API);
      const item = await meme.json();
      setApi(item);
    };
    lol();
  }, []);

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
      {JSON.stringify(api)}
    </div>
  );
};

export default Home;
