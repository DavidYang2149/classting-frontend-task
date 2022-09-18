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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default CustomHead;
