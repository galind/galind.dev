import "../styles/main.css";
import { NextSeo } from "next-seo";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Guillem Galindo"
        titleTemplate="Guillem Galindo"
        defaultTitle="Guillem Galindo"
        description="I like to automate boring processes and solve problems using Python. Started coding at the age of 13 and 3 years later I started to work for companies worldwide as a freelance."
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;