import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Layout>
      <Head>
        <title>Watchout</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
