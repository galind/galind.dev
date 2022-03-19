import "../styles/main.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Particles from "../components/particles";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Guillem Galindo"
        titleTemplate="Guillem Galindo"
        defaultTitle="Guillem Galindo"
        description="I enjoy automating boring processes and solving everyday problems using Python."
      />

      <Head>
        <link rel="shortcut icon" href="/images/rocket.ico" />
      </Head>

      <Particles />
      <Component {...pageProps} />
    </>
  );
};

export default App;