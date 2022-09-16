import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Classting Quiz</title>
        <meta name="description" content="Classting Quiz" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Classting Quiz
        </h1>
      </main>
    </div>
  );
};

export default Home;
