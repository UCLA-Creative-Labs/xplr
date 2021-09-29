import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const title = `${props.title ?? 'xplr'} | Creative Labs`;
  const description = props.description ?? 'A website dedicated to tracking the concepts, blog posts, and ideas that inspire the Creative Labs dev team.';
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xplr.creativelabsucla.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description"  content={description} />
        <meta property="og:image" content="https://assets.creativelabsucla.com/metadata.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://assets.creativelabsucla.com/metadata.png" />

        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={props.id}>
        {props.children}
      </main>
    </>
  );
}
