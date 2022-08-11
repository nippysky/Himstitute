import Layout from "../Components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
