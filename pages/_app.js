import Layout from "../Components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <NextNProgress
        color="#1AD84F"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
