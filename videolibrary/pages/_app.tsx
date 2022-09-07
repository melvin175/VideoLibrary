import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

export default function App({
  Component,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
