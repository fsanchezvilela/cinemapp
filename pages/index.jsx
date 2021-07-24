import Head from 'next/head';
import Button from '../src/common/view/components/button/Button.tsx';

export default function Home() {
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
    </div>
  );
}
