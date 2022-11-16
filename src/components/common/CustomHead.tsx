import Head from 'next/head';
import React from 'react';

const CustomHead = ({
  title, content,
}: {
  title: string, content: string,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={content} />
      <meta name="keywords" content="random, quiz" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="random quiz" />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:url" content="https://random-quiz-frontend-task.vercel.app" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content="/favicon.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default CustomHead;
