import "../styles/main.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Guillem Galindo"
        titleTemplate="Guillem Galindo"
        defaultTitle="Guillem Galindo"
      />

      <Head>
        <link rel="shortcut icon" href="/images/porsche.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;