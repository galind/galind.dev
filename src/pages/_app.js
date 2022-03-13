import "../styles/main.css";
import { NextSeo } from "next-seo";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Guillem Galindo"
        titleTemplate="Guillem Galindo"
        defaultTitle="Guillem Galindo"
        description="I enjoy automating boring processes and solving everyday problems using Python."
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;