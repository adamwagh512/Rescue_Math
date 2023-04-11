import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={`https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.1.2/es5/tex-svg.min.css`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}